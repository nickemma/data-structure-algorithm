//  Create a stack data structure. The stack should be a class with methods 'push', 'pop', and 'peek'. Adding an element to the stack should store it until it is removed.

class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  //   push function to add element in the stack
  push(element) {
    this.items.push(element);
  }

  //   pop function to remove element from the stack
  pop() {
    return this.items.pop();
  }

  //   peek function to return the top element in the stack
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

while (!myStack.isEmpty()) {
  console.log(myStack.pop());
}
