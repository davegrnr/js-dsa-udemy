class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let popVal = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popVal.prev = null;
    }

    this.length--;
    console.log("Popped value:", popVal);
    return popVal;
  }

  shift() {
    if (!this.head) return undefined;
    let shiftVal = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shiftVal.next = null;
    }
    this.length--;
    console.log("Shift value:", shiftVal);
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter, current;
    if (index <= this.length / 2) {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(index, val) {
    let found = this.get(index);
    if (found) {
      found.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let found = this.get(index);
    let next = found.next;
    (newNode.next = next), (newNode.prev = found);
    found.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (!this.length || index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let found = this.get(index);
    found.prev.next = found.next;
    found.next.prev = found.prev;
    found.next = null;
    found.prev = null;
    this.length--;
    console.log(found);
    return found;
  }
  reverse() {
    let current = this.head;
    while (current) {
      let temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = temp;
    }
    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }
}
let list1 = new DoublyLinkedList();
let list2 = new DoublyLinkedList();

list1.push(0);
list1.push(1);
list1.push(2);
list1.push(3);
list1.reverse();
// list1.push(4);
// list1.push(5);
// list1.push(6);
// list1.push(7);

// list1.get(2);
// list1.get(4);
// list1.set(5, 100);
// list1.insert(2, 4);
// list1.insert(0, 0);
// list1.remove(2);

// list1.pop();
// list1.shift();
// list1.unshift(0);
// list2.unshift(0);
// list2.unshift(1);
console.log("List 1:", list1);
// console.log("List 2:", list2);
