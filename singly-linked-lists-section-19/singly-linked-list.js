class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let shiftVal = this.head;
    this.head = shiftVal.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return shiftVal;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    if (index >= this.length || index < 0) return false;
    let foundNode = this.get(index);
    foundNode.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    let prevNode = this.get(index - 1);
    prevNode.next = prevNode.next.next;
    this.length--;
    return true;
  }
  reverse() {
    let node = this.head; //1 ->
    this.head = this.tail; // head: 6
    this.tail = node; //tail: 1 ->
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
let list2 = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

// list.remove(2);
list.reverse();
console.log("List with multiple values", list);

// list2.insert(0, 1);
list2.remove(2);

console.log("Single value: ", list2);
