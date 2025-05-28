class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown();
    return top;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    const node = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].val <= node.val) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }
    this.heap[index] = node;
  }

  _sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const node = this.heap[0];

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let swap = null;

      if (left < length && this.heap[left].val < node.val) {
        swap = left;
      }

      if (right < length && this.heap[right].val < (swap === null ? node.val : this.heap[left].val)) {
        swap = right;
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }

    this.heap[index] = node;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function mergeKLists(lists) {
  const heap = new MinHeap();
  const dummy = { val: 0, next: null };
  let current = dummy;

  for (let node of lists) {
    if (node) heap.push(node);
  }

  while (!heap.isEmpty()) {
    const node = heap.pop();
    current.next = node;
    current = current.next;
    if (node.next) heap.push(node.next);
  }

  return dummy.next;
}
