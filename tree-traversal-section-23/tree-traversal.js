class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  // breadthFirstSearch(current = this.root, visited =[]) {
  //   let queue = [];
  //   queue.push(current);
  //   while (queue.length) {
  //     visited.push(queue.shift().value);
  //     if (current.left) {
  //       return this.breadthFirstSearch(current.left, visited);
  //     } else if (current.right) {
  //       return this.breadthFirstSearch(current.right, visited);
  //     }
  //   }
  //   return visited;
  // }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
console.log(bst.BFS());
console.log("DFS PreOrder: ", bst.DFSPreOrder());
console.log("DFS PostOrder: ", bst.DFSPostOrder());
console.log("DFS InOrder: ", bst.DFSInOrder());
console.log(bst);
