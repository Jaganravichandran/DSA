// Introduction to Stack and Queue

// Implementation of stack using array (in-build methods)
class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // push element to stack
  push(element) {
    this.items.push(element);
  }

  // pop element from stack
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  // get the top element without removing it.
  top() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.size() - 1];
  }

  // check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // get size of stack
  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.items);

console.log(stack.top());

console.log(stack.pop());

console.log(stack.size());

// Implementation of Queue using array (in-build methods)
class Queue {
  constructor() {
    this.items = []; // Array to store Queue elements
  }

  // push element to queue (it has alternative name => enqueue)
  push(element) {
    this.items.push(element);
  }

  // pop element from queue (it has alternative name => dequeue)
  pop() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // get the top element without removing it (it has alternative name => front)
  top() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // get size of queue
  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.push(30);
queue.push(40);

console.log(queue.items);

console.log(queue.top());

console.log(queue.pop());

console.log(queue.size());

console.log(queue.isEmpty());
