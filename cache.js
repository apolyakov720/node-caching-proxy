class Cache {
  store = new Map();

  get(key) {
    return this.store.get(key);
  }

  set(key, value) {
    this.store.set(key, value);

    return this;
  }

  clear() {
    this.store.clear();

    return this;
  }
}

const cache = new Cache();

export { cache };
