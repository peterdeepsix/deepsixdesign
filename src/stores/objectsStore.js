import { observable, action, decorate, toJS } from 'mobx';

class ObjectsStore {
  firestore = null;

  objects = [];

  setFirestore(firestore) {
    this.firestore = firestore;
  }

  async getObjects() {
    try {
      const { docs } = await this.firestore
        .collection('objects')
        .limit(100)
        .get();
      const objects = docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.objects.replace(objects);
    } catch (error) {
      console.log(error);
    }
  }

  async addObject(object) {
    try {
      const ref = await this.firestore.collection('objects').add({
        ...object,
        status: 'pending',
        createdAt: new Date().valueOf(),
      });
      const doc = await ref.get();
      const objects = toJS(this.objects);

      objects.push({ id: doc.id, ...doc.data() });
      objects.sort((a, b) => (a.dueAt > b.dueAt ? 1 : -1));

      this.objects.replace(objects);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updateObject(object) {
    const { id } = object;
    delete object.id;

    try {
      const ref = this.firestore.collection('objects').doc(id);
      await ref.update(object);
      const doc = await ref.get();

      const storedIdx = this.objects.findIndex(p => p.id === id);
      this.objects[storedIdx] = { id, ...doc.data() };

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  dehydrate() {
    return {
      firestore: this.firestore,
      objects: this.objects,
    };
  }
}

decorate(ObjectsStore, {
  firestore: observable,
  objects: observable,
  setFirestore: action,
  getObjects: action,
  addObject: action,
  updateObject: action,
});

export default ObjectsStore;
