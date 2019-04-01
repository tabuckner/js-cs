class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.resetHeadAndTail();
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      return this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    // loop through list until you reach the tail, but take note of previous element
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current; // Shift up one.
      current = current.next; // Move one up
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.resetHeadAndTail();
    }
    return current;
  }

  resetHeadAndTail() {
    this.head = null;
    this.tail = null;
  }
}

let list = new SinglyLinkedList();
list.push(1);
console.log(list);
list.push(2);
console.log(list);
list.push(3);
console.log(list);
console.log(list.pop())
console.log(list);
