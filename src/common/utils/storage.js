import store from 'store2';

function setItem(key, data) {
  store.set(key, data);
}

function getItem(key) {
  return store.get(key);
}

function removeItem(key) {
  return store.remove(key);
}

function removeAll() {
  return store.clear();
}

export default {
  setItem,
  getItem,
  removeItem,
  removeAll,
};
