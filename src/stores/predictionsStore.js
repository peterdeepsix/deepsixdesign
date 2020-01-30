import { observable, action, decorate, toJS } from 'mobx';

class PredictionsStore {
  firestore = null;
  storage = null;
  predictions = [];

  setFirestore(firestore) {
    this.firestore = firestore;
  }
  setStorage(storage) {
    this.storage = storage;
  }
  async getPredictions() {
    try {
      const { docs } = await this.firestore
        .collection('predictions')
        .limit(100)
        .get();
      const predictions = docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.predictions.replace(predictions);
    } catch (error) {
      console.log(error);
    }
  }

  async addPrediction(prediction) {
    try {
      const ref = await this.firestore.collection('predictions').add({
        ...prediction,
        status: 'pending',
        createdAt: new Date().valueOf(),
      });
      const doc = await ref.get();
      const predictions = toJS(this.predictions);

      predictions.push({ id: doc.id, ...doc.data() });
      predictions.sort((a, b) => (a.dueAt > b.dueAt ? 1 : -1));

      this.predictions.replace(predictions);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatePrediction(prediction) {
    const { id } = prediction;
    delete prediction.id;

    try {
      const ref = this.firestore.collection('predictions').doc(id);
      await ref.update(prediction);
      const doc = await ref.get();

      const storedIdx = this.predictions.findIndex(p => p.id === id);
      this.predictions[storedIdx] = { id, ...doc.data() };

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  dehydrate() {
    return {
      firestore: this.firestore,
      predictions: this.predictions,
    };
  }
}

decorate(PredictionsStore, {
  firestore: observable,
  predictions: observable,
  storage: observable,
  setFirestore: action,
  getPredictions: action,
  addPrediction: action,
  updatePrediction: action,
});

export default PredictionsStore;
