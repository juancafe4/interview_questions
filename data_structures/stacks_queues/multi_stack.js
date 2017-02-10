class fixedMultiStack {
  constructor(stackSize) {
    this.numberofStacks = 3;
    this.stackSize = stackSize;
    this.values = new Array(stackSize * this.numberofStacks);
    this.sizes = new Array(this.numberofStacks).fill(0);
  }

  push(numStack, data) {
    if (this.isFull(numStack)) {
      throw new Error(`Stack ${numStack} is full`);
    }
    let offset = numStack * this.stackSize;
    let size = this.sizes[numStack];
    this.values[size + offset] = data;
    this.sizes[numStack]++;

  }
  pop(numStack) {
    if (this.isEmpty(numStack)) {
      throw new Error(`Stack ${numStack} is empty`);
    }
    let offset = numStack * this.stackSize;
    let size = this.sizes[numStack] - 1;

    let data = this.values[offset + size];
    this.values[offset + size] = 0;
    this.sizes[numStack]--;
    return data
  }
  isFull(numStack) {
    return this.sizes[numStack] === this.stackSize
  }
  isEmpty(numStack) {
    return this.sizes[numStack] === 0
  }
  peek(numStack) {
    if (this.isEmpty(numStack)) {
      throw new Error(`Stack ${numStack} is empty`);
    }
    let offset = numStack * this.stackSize;
    let size = this.sizes[numStack] - 1;
    return this.values[offset + size];
  }
}


// Testing 
let stacks = new fixedMultiStack(10);

stacks.push(1, 45);
console.log(stacks.peek(1));
stacks.push(0, 4);
stacks.push(0, 5);
stacks.push(0, 7);
stacks.push(0, 8);
stacks.push(0, 5);
console.log(stacks.pop(0))
console.log(stacks.peek(0));