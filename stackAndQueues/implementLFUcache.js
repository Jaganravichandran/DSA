// Implement LFU(least frequently used) cache

class DLLNode {
  constructor(key = -1, value = -1, count = 1, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.count = count;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  addFront(node) {
    let temp = this.head.next;
    node.next = temp;
    node.prev = this.head;
    this.head.next = node;
    temp.prev = node;
    this.size++;
  }

  removeNode(node) {
    let prev = node.prev;
    let front = node.next;
    prev.next = front;
    front.prev = prev;
    this.size--;
  }

  removeTail() {
    if (this.size > 0) {
      let nodeToRemove = this.tail.prev;
      this.removeNode(nodeToRemove);
      return nodeToRemove;
    }
    return null;
  }

  isEmpty() {
    return this.size == 0;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;
    this.keyNode = new Map(); // Maps key to DLLNode
    this.freqListMap = new Map(); // Maps frequency to doublyLinkedList
  }

  get(key) {
    if (!this.keyNode.has(key)) {
      return -1;
    }
    let node = this.keyNode.get(key);
    this.updateNodeFrequency(node);
    return node.value;
  }

  put(key, value) {
    if (this.capacity <= 0) return;

    // if key exist, update the value and frequency
    if (this.keyNode.has(key)) {
      let node = this.keyNode.get(key);
      node.value = value;
      this.updateNodeFrequency(node);
      return;
    }

    // if capacity is full, remove LFU item
    if (this.size == this.capacity) {
      let listToRemoveFrom = this.freqListMap.get(this.minFreq);
      let nodeToRemove = listToRemoveFrom.removeTail();
      this.keyNode.delete(nodeToRemove.key);
      this.size--;

      // If the list becomes empty, remove it from freqToList
      if (listToRemoveFrom.isEmpty()) {
        this.freqListMap.delete(this.minFreq);
      }
    }

    // Add new Node
    let newNode = new DLLNode(key, value);
    this.keyNode.set(key, newNode);

    if (!this.freqListMap.has(1)) {
      this.freqListMap.set(1, new DoublyLinkedList());
    }

    this.freqListMap.get(1).addFront(newNode);
    this.minFreq = 1;
    this.size++;
  }

  updateNodeFrequency(node) {
    const oldFreq = node.count;
    const currentList = this.freqListMap.get(oldFreq);
    currentList.removeNode(node);

    if (oldFreq === this.minFreq && currentList.isEmpty()) {
      this.minFreq++;
    }

    node.count++;
    let newCount = node.count;

    if (!this.freqListMap.has(newCount)) {
      this.freqListMap.set(newCount, new DoublyLinkedList());
    }

    this.freqListMap.get(newCount).addFront(node);
  }
}

// LFU cache using only maps
class LFUCache2 {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.minFrequency = 0;
    this.keyToVal = new Map();
    this.keyToFreq = new Map();
    this.freqToKeys = new Map();
  }

  get(key) {
    if (!this.keyToVal.has(key)) {
      return -1;
    }

    let value = this.keyToVal.get(key);
    let oldFreq = this.keyToFreq.get(key);

    let newFreq = oldFreq + 1;
    this.keyToFreq.set(key, newFreq);

    let oldFreqKeys = this.freqToKeys.get(oldFreq);
    oldFreqKeys.delete(key);

    if (oldFreq === this.minFrequency && oldFreqKeys.size == 0) {
      this.minFrequency = newFreq;
    }

    if (!this.freqToKeys.has(newFreq)) {
      this.freqToKeys.set(newFreq, new Set());
    }

    this.freqToKeys.get(newFreq).add(key);
    return value;
  }

  put(key, value) {
    if (this.capacity <= 0) return;

    if (this.keyToVal.has(key)) {
      this.keyToVal.set(key, value);
      this.get(key);
      return;
    }

    if (this.size == this.capacity) {
      let minFreqKeys = this.freqToKeys.get(this.minFrequency);
      let keyToRemove = minFreqKeys.values().next().value;

      minFreqKeys.delete(keyToRemove);
      this.keyToVal.delete(keyToRemove);
      this.keyToFreq.delete(keyToRemove);
      this.size--;
    }

    this.keyToVal.set(key, value);
    this.keyToFreq.set(key, 1);

    if (!this.freqToKeys.has(1)) {
      this.freqToKeys.set(1, new Set());
    }

    this.freqToKeys.get(1).add(key);

    this.minFrequency = 1;
    this.size++;
  }
}
