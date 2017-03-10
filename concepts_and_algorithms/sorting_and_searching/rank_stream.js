// 2k + 1 left children
// 2k + 2 right children
// (k -1) / 2 parent
class MinHeap {
  constructor() {
    this.arr = [];
  }
  parent(k) {
    return Math.floor((k -1) / 2);
  }
  leftChild(k) {
    return 2*k + 1;
  }
  rightChild(k) {
    return 2*k + 2;
  }
  heapify(list) {
    for (let i in list) {
      this.insert(list[i]);
    }
  }
  insert(val) {
    this.arr.push(val)
    if (this.arr.length > 1) {
      this.shiftup();
    }
  }
  shiftup() {
    let k = this.arr.length - 1;

    while (k > 0 && this.arr[this.parent(k)] > this.arr[k]) {
      let parentIndex = this.parent(k);
      let parent = this.arr[parentIndex];
      let child = this.arr[k];
      // Swap
      this.arr[k] = parent;
      this.arr[parentIndex] = child;
      k = parentIndex;
    }
  }

  deleteMin() {
    
    return 
  }
}

let heap = new MinHeap();

let list = [3, 5, 7, 1, 4, 6, 2, 10];

heap.heapify(list);


console.log(heap.arr)