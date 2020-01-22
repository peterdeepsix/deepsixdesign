import { observable, action, decorate, toJS } from 'mobx';

class FirebaseStore {
  firebase = null;
  auth = null;
  firestore = null;
  storageRef = null;

  predictions = [];

  setFirebase(firebase) {
    this.firebase = firebase;
  }

  setAuth(auth) {
    this.auth = auth;
  }

  setFirestore(firestore) {
    this.firestore = firestore;
  }

  setStorageRef(storage) {
    this.storageRef = storage.ref()
  }

  async getPredictions() {
    try {
      const { docs } = await this.firestore
        .collection('predictions')
        .orderBy('dueAt', 'asc')
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
      firebase: this.auth,
      auth: this.auth,
      storageRef: this.storageRef,
      firestore: this.firestore,
      predictions: this.predictions,
    };
  }
}

decorate(FirebaseStore, {
  firebase: observable,
  auth: observable,
  storageRef: observable,
  firestore: observable,
  predictions: observable,
  setFirebase: action,
  setAuth: action,
  setFirestore: action,
  setStorageRef: action,
  getPredictions: action,
  addPredictions: action,
  updatePredictions: action,
});

export default FirebaseStore;
