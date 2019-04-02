class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this._resetHeadAndTail();
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this._setHeadAndTail(newNode);
      this.length++;
      return this;
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
      this._resetHeadAndTail();
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const returnNode = this.head;
    this.head = returnHead.next;
    this.length--;
    if (this.length === 0) {
      this._resetHeadAndTail();
    }
    return returnNode;
  }

  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this._setHeadAndTail(newNode)
      this.length++;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  _resetHeadAndTail() {
    this.head = null;
    this.tail = null;
  }

  _setHeadAndTail(val) {
    this.head = val;
    this.tail = val;
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
