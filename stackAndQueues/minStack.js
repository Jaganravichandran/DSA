// Implement min stack

class Stack {
  constructor() {
    this.items = [];
    this.minStack = [];
  }

  push(val) {
    this.items.push(val);
    if (
      this.minStack.length == 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    let poppedElement = this.items.pop();
    if (poppedElement === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return poppedElement;
  }

  top() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    let topElement = this.items[this.items.length - 1];
    return topElement;
  }

  getMin() {
    return this.minStack.length
      ? this.minStack[this.minStack.length - 1]
      : null;
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

// const stack = new Stack();
// stack.push(12);
// stack.push(15);
// stack.push(10);

// console.log(stack.items);

// console.log(stack.getMin());

// console.log(stack.pop());

// console.log(stack.top());

// implement min stack using single array where each elements is stored as pair [val, min]

class Stack2 {
  constructor() {
    this.items = [];
  }

  push(val) {
    const min = this.items.length === 0 ? val : Math.min(val, this.getMin());
    this.items.push([val, min]);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    // const popped = this.items[this.items.length - 1][0];
    const popped = this.top(); // Method 2
    this.items.pop();
    return popped;
  }

  top() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1][0];
  }

  getMin() {
    return this.items.length ? this.items[this.items.length - 1][1] : null;
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

// const stack2 = new Stack2();
// stack2.push(12);
// stack2.push(15);
// stack2.push(10);

// console.log(stack2.items);

// console.log(stack2.getMin());

// console.log(stack2.pop());

// console.log(stack2.top());

// console.log(stack2.getSize());

// Implement min stack using mathematical approach
class Minstack {
  constructor() {
    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER;
  }

  push(val) {
    if (this.isEmpty()) {
      this.min = val;
      this.stack.push(val);
    } else {
      if (val > this.min) {
        this.stack.push(val);
      } else {
        this.stack.push(2 * val - this.min);
        this.min = val; // this gonna be our top element
      }
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const popped = this.top();
    const val = this.stack.pop();
    if (val < this.min) {
      // this is our modified value, we need to get back our prev minimum
      this.min = 2 * this.min - val;
    }
    return popped;
  }

  top() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const topElement = this.stack[this.stack.length - 1];
    if (this.min < topElement) {
      return topElement;
    } else {
      return this.min;
    }
  }

  getMin() {
    return this.min;
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  getSize() {
    return this.stack.length;
  }
}

const stack3 = new Minstack();
stack3.push(12);
stack3.push(15);
stack3.push(10);

console.log(stack3.stack);

console.log(stack3.getMin());

console.log(stack3.pop());

console.log(stack3.top());
