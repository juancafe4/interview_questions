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

  delete() {
    if (this.arr.length === 1) {
      return this.arr.pop();
    }

    let val = this.arr[0];
    let temp = this.arr.pop();
    this.arr[0] = temp;
    this.shiftdown(0);
    return val;
  }

  shiftdown(index) {
    let left = this.leftChild(index);
    let right = this.rightChild(index);
    let length = this.arr.length;

    let smallest = index;
    if (left < length && this.arr[left] < this.arr[index]) {
      smallest = left;
    }

    if (right < length && this.arr[right] < this.arr[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      // Swap
      let temp = this.arr[smallest];

      this.arr[smallest] = this.arr[index];
      this.arr[index] = temp;
      this.shiftdown(smallest)
    }
  }

  sort() {
      let sortList = [];
      let len = this.arr.length;
      for (let i = 0; i < len; i++) {
        sortList.push(this.delete());
      }
      return sortList;
  }

  getRank(num) {
    let count = 0;
    while(this.arr.length) {
      if (num >= this.delete()) {
        count++;
      }
    }

    return count - 1;
  }
}

let heap = new MinHeap();

let list = [5, 1, 4, 4, 5, 9, 7, 13, 3];

heap.heapify(list);


//console.log(heap.arr)

// heap.delete();
// console.log(heap.arr)

//console.log(heap.sort());

console.log(heap.getRank(4))

