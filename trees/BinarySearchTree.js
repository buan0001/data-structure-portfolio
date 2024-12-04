// Der er altså ikke noget at extende fra Tree... det hele skal ændres for at virke med et binært træ
export default class BinarySearchTree {
  root;
  comparator;
  constructor(comparator = null) {
    this.comparator = comparator;
  }

  add(item) {
    let current = root;
    while (current) {
      if (item > current.item) {
      }
    }
  }
  contains(item) {}
  first() {}
  last() {}
  traverse() {}
  print() {}
}

class Node {
  item;
  parent;
  lchild = null;
  rchild = null;
  height = 0;
  constructor(item, parent = null) {
    this.item = item;
    this.parent = parent;
  }
}
