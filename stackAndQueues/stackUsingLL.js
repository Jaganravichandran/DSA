// implementation of stack using linkedList(LL)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(x) {
    const temp = new Node(x);
    if (this.top == null) {
      this.top = temp;
    } else {
      temp.next = this.top;
      this.top = temp;
    }
    this.size++;
  }

  pop() {
    if (this.top == null) {
      console.log("stack is empty");
      return null;
    } else {
      const poppedNode = this.top;
      this.top = this.top.next;
      this.size--;
      return poppedNode.data;
    }
  }

  getTop() {
    if (this.top == null) {
      console.log("stack is empty");
      return null;
    } else {
      return this.top.data;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.top == null;
  }

  display() {
    let temp = this.top;
    let res = [];
    while (temp != null) {
      res.push(temp.data);
      temp = temp.next;
    }
    return res.join(" -> ");
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.display());

console.log(stack.pop());

console.log(stack.getTop());

console.log(stack.getSize());
