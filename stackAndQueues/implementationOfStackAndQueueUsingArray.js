// Implementation of stack using array (without in-build methods)
class Stack {
  constructor() {
    this.temp = -1;
    this.items = []; // Array to store stack elements
  }

  // push element to stack
  push(element) {
    this.temp = this.temp + 1;
    this.items[this.temp] = element;
  }

  // pop element from stack
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    const poppedElement = this.items[this.temp];
    // remove the top element

    // Method 1 (preferred)
    this.items.splice(this.temp, 1); // Remove the top element

    // Method 2
    // this.items[this.temp] = undefined; // Mark the element as undefined

    this.temp = this.temp - 1; // Update temp after removal
    return poppedElement;
  }

  // get the top element without removing it.
  top() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.temp];
  }

  // check if stack is empty
  isEmpty() {
    return this.temp === -1;
  }

  // get size of stack
  size() {
    return this.temp + 1;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);

// console.log(stack.items);

// console.log(stack.top());

// console.log(stack.pop());

// console.log(stack.size());

// Implementation of Queue using array (without in-build methods)
class Queue {
  constructor() {
    this.items = []; // Array to store queue elements
    this.start = -1; // pointer to the front of the queue
    this.end = -1; // pointer to the rear of the queue
  }

  // Enqueue operation (push element to queue)
  push(element) {
    if (this.start == -1) {
      this.start = 0;
    }
    this.end = this.end + 1;
    this.items[this.end] = element;
  }

  // Dequeue operation (remove element from queue)
  pop() {
    if (this.isEmpty()) return "Queue is empty";
    const removedElement = this.items[this.start];
    this.items[this.start] = undefined;
    if (this.start == this.end) {
      this.start = -1;
      this.end = -1;
      this.items = [];
    } else {
      this.start = this.start + 1;
    }
    return removedElement;
  }

  // get the top front element without removing it
  top() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[this.start];
  }

  // check if the queue is empty
  isEmpty() {
    return this.start == -1;
  }

  // get the size of the queue
  size() {
    return this.isEmpty() ? 0 : this.end - this.start + 1;
  }
}

const queue = new Queue();
queue.push(12);

console.log(queue.items);

console.log(queue.top());

console.log(queue.items);

console.log(queue.pop());

console.log(queue.size());

console.log(queue.items);
