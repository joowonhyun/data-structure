class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
}

class Node {
  children = [];
  constructor(value) {
    this.value = value;
  }
  push(value) {
    this.children.push(new Node(value));
  }
}

const tree = new Tree(50);
