// Runtime at popAt() is O(N) length of stacks is constant
// but to run for every item in the stack is O(N)
// Space O(M) size of the satck

class StackOfStacks {
  constructor(capacity) {
    if (arguments.length < 1) {
      throw new Error("Capacity is not defined");
    }
    this.max = capacity;
    this.stacks = [];
  }

  push(val) {
    if (!this.stacks.length || this.stacks[this.stacks.length - 1].length >= this.max) {
      this.stacks.push([]);
    }

    this.stacks[this.stacks.length - 1].push(val);
  }

  pop() {
    if (this.stacks.length === 0) {
      throw new Error("Empty stack!");
    }
    let val = this.stacks[this.stack.length - 1].pop();
    if ( this.stacks[this.stack.length - 1].length === 0) {
      this.stacks.pop();
    }

    return val;
  }
  popAt(num) {
    if (num > this.stacks.length || num <= 0) {
      throw new Error("Invalid number of stack");
    }

    // We are dealing at the end of the stack
    if (num === this.stacks.length) {
      return this.pop()
    }

    let stack = this.stacks[num - 1];
    let data = stack.pop();
    if (num < this.stacks.length) {
      for (let i = num; i < this.stacks.length; i++) {
        let newStack = this.stacks[num];
        let tempStack = [];
        while (newStack.length !== 0) {
          tempStack.push(newStack.pop());
        }
        stack.push(tempStack.pop());

        while(tempStack.length !== 0) {
          newStack.push(tempStack.pop());
        }
        stack = newStack;
      }
    }

    if (this.stacks[this.stacks.length - 1] === 0 && this.stacks.length !== 0) {
      this.stacks.pop();
    }

    return data;
  }

  print() {
    for (let i in this.stacks) {
      console.log('Stack', Number(i) + 1);
      for (let j in this.stacks[i]) {
        console.log(this.stacks[i][j])
      }
    }
  }
}


let stacks = new StackOfStacks(4);
stacks.push(4)
stacks.push(5)
stacks.push(7)
stacks.push(3)
stacks.push(32)
stacks.push(66)
stacks.push(7)
stacks.push(2)
stacks.push(6)
stacks.push(5)
stacks.push(7)
stacks.print();
stacks.popAt(2)
stacks.print();