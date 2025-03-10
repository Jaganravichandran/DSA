// implement LRU(least recently used) cache

class LRUcacheBrute {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size >= this.capacity) {
      let oldestKey = this.map.keys().next().value;
      this.map.delete(oldestKey);
    }
    this.map.set(key, value);
  }
}

// Optimal
class Node {
  constructor(key = -1, value = -1, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRUcache {
  constructor(capacity) {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    let node = this.map.get(key);
    this.deleteNode(node);
    this.insertAfterHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node.value = value;
      this.deleteNode(node);
      this.insertAfterHead(node);
      return;
    } else {
      if (this.map.size >= this.capacity) {
        let lru = this.tail.prev;
        this.deleteNode(lru);
        this.map.delete(lru.key);
      }
      let newNode = new Node(key, value);
      this.insertAfterHead(newNode);
      this.map.set(key, newNode);
      return;
    }
  }

  deleteNode(node) {
    let prev = node.prev;
    let front = node.next;
    prev.next = front;
    front.prev = prev;
  }

  insertAfterHead(node) {
    let currAfterHead = this.head.next;
    currAfterHead.prev = node;
    this.head.next = node;
    node.next = currAfterHead;
    node.prev = this.head;
  }
}
