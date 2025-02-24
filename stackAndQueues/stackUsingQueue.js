// Implement stack using single queue (optimized pop)

class Stack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    let size = this.queue.length;
    this.queue.push(x);
    while (size > 0) {
      this.queue.push(this.queue.shift());
      size--;
    }
  }

  pop() {
    if (this.queue.length == 0) {
      return "Stack is empty";
    } else {
      return this.queue.shift();
    }
  }

  top() {
    if (this.queue.length == 0) {
      return "Stack is empty";
    } else {
      return this.queue[0];
    }
  }

  isEmpty() {
    return this.queue.length == 0;
  }

  getSize() {
    return this.queue.length;
  }
}

// const stack = new Stack();
// stack.push(5);
// stack.push(10);
// stack.push(15);

// console.log(stack.queue);

// console.log(stack.pop());

// console.log(stack.top());

// console.log(stack.getSize());

// Implement stack using two queues (optimized push)

class Stack2 {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x) {
    this.q1.push(x);
  }

  pop() {
    if (this.q1.length == 0) {
      return "Stack is empty";
    }
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    let poppedElement = this.q1.shift();
    [this.q1, this.q2] = [this.q2, this.q1]; // swap q1 and q2
    return poppedElement;
  }

  top() {
    if (this.q1.length == 0) {
      return "Stack is empty";
    }
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    let topElement = this.q1[0];
    this.q2.push(this.q1.shift());
    [this.q1, this.q2] = [this.q2, this.q1]; // swap q1 and q2
    return topElement;
  }

  isEmpty() {
    return this.q1.length == 0;
  }

  getSize() {
    return this.q1.length;
  }
}

const stack2 = new Stack2();
stack2.push(5);
stack2.push(10);
stack2.push(15);

console.log(stack2.q1);

console.log(stack2.pop());

console.log(stack2.top());

console.log(stack2.getSize());
