// Implementation of circular queue using array (without in-build methods)
class Queue {
  constructor(size) {
    this.size = size;
    this.currSize = 0;
    this.start = -1;
    this.end = -1;
    this.items = new Array(size);
  }

  // Add an element to the queue (enqueue)
  push(element) {
    if (this.currSize == this.items.length) {
      return "Cannot add more elements, Queue size limit reached";
    }
    if (this.end == -1) {
      // If the queue is empty, set both start and end to 0
      this.start = 0;
      this.end = 0;
    } else {
      // Move end to the next index, wrap around if at last index
      this.end = (this.end + 1) % this.size;
    }
    this.items[this.end] = element;
    this.currSize++;
  }

  // Remove an element from the queue (dequeue)
  pop() {
    if (this.currSize == 0) {
      return "Queue is empty";
    }
    const poppedElement = this.items[this.start];
    this.items[this.start] = undefined;
    if (this.start == this.end) {
      this.start = -1;
      this.end = -1;
    } else {
      this.start = (this.start + 1) % this.size;
    }
    this.currSize--;
    return poppedElement;
  }

  // Get the front element of the queue
  top() {
    if (this.currSize == 0) {
      return "Queue is empty";
    }
    return this.items[this.start];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.currSize == 0;
  }

  // Check if the queue is full
  isFull() {
    return this.currSize == this.size;
  }

  // get the current size of the queue
  getSize() {
    return this.currSize;
  }
}

const queue = new Queue(2);
queue.push(30);
queue.push(40);

console.log(queue.items);

console.log(queue.top());

console.log(queue.pop());

console.log(queue.getSize());

console.log(queue.isEmpty());
