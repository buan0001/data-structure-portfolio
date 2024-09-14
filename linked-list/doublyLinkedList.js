export default class DoublyLinkedList {
  head;
  tail;
  constructor(node = null) {
    this.head = node;
    this.tail = node;
  }

  addLast(data) {
    const newNode = new Node(data);
    this.addNodeLast(newNode);
  }
  addFirst(data) {
    const newNode = new Node(data);
    this.addNodeFirst(newNode);
  }
  get(index) {
    return; // element at index
  }
  indexOf(data) {}
  insertAfter(index, data) {}
  insertBefore(index, data) {}
  first() {
    return this.head;
  }
  last() {
    return this.tail;
  }
  remove(data) {}
  removeIndex(index) {}

  removeFirst() {
    const oldHead = this.head;
    if (oldHead?.next) {
      // Remove the next's link to the first
      this.head = oldHead.next;
      this.head.prev = null;
    }
    // If the tail has no previous, the list has no other elements or is already empty. Remove both head and tail
    else {
      this.clear();
    }
    return oldHead;
  }

  removeLast() {
    const oldTail = this.tail;
    if (oldTail?.prev) {
      this.tail = oldTail.prev;
      this.tail.next = null;
    }
    // If the tail has no previous, the list has no other elements or is already empty. Remove both head and tail
    else {
      this.clear();
    }
    return oldTail;
  }

  // Methods to work directly on nodes
  addNodeLast(newNode) {
    console.log("Adding node last");

    const oldTail = this.tail;
    this.tail = newNode;
    if (oldTail) {
      this.tail.prev = oldTail;
      oldTail.next = newNode;
    }
    // If old head wasn't defined, it means the list was empty. In that case, tail and head should be the same
    else {
      this.head = this.tail;
    }
  }
  addNodeFirst(newNode) {
    console.log("New node:", newNode);

    const oldHead = this.head;
    this.head = newNode;
    if (oldHead) {
      this.head.next = oldHead;
      oldHead.prev = this.head;
    }
    // If old head wasn't defined, it means the list was empty. In that case, tail and head should be the same
    else {
      this.tail = this.head;
    }
    console.log("This.head =", this.head);
  }

  insertAfterNode(newNode, existingNode) {
    if (existingNode == this.tail) {
      this.addNodeLast(newNode);
    } else {
      console.log("Insert after node, existing not tail");

      newNode.prev = existingNode;
      newNode.next = existingNode.next;
      existingNode.next.prev = newNode;
      existingNode.next = newNode;
    }
  }

  insertBeforeNode(newNode, existingNode) {
    if (existingNode == this.head) {
      this.addNodeFirst(newNode);
    } else {
      const oldPrev = existingNode.prev;
      newNode.prev = oldPrev;
      newNode.next = existingNode;
      oldPrev.next = newNode;
      existingNode.prev = newNode;
    }
  }

  removeNode(existingNode) {
    if (existingNode == this.head) {
      this.removeFirst();
    } else if (existingNode == this.tail) {
      this.removeLast();
    } else {
      let current = this.head;
      while (current) {
        if (current == existingNode) {
          // Change the previous and the next nodes to point at eachother instead of pointing to the current node - bam, current is gone
          current.next.prev = current.prev;
          current.prev.next = current.next;
        }
        current = this.getNext(current);
      }
    }
  }

  nodeAt(index) {
    return; // node at index
  }

  swapNodes(nodeA, nodeB) {
    const aData = nodeA.data;
    nodeA.data = nodeB.data;
    nodeB.data = aData

    // IGNORE THIS: Made by silly

    // if (nodeA === nodeB) {
    //   console.log("You cant swap a node with itself, silly!");
    //   return;
    // }
    // // We can make do with just saving A's previous references
    // const oldPrevA = nodeA.prev;
    // const oldNextA = nodeA.next;

    // if (nodeA.next == nodeB) {
    //   // Setting node A
    //   nodeA.prev = nodeB;
    //   nodeA.next = nodeB.next;
    //   if (nodeB.next?.prev) nodeB.next.prev = nodeA;

    //   // Setting node B
    //   nodeB.next = nodeA;
    //   nodeB.prev = oldPrevA;
    //   if (oldPrevA?.next) oldPrevA.next = nodeB;
    // } else if (nodeB.next == nodeA) {
    //   // Setting node A
    //   nodeA.next = nodeB;
    //   nodeA.prev = nodeB.prev;
    //   if (nodeB.prev?.next) nodeB.prev.next = nodeA;

    //   // Setting node B
    //   nodeB.next = oldNextA;
    //   if (oldNextA?.prev) oldNextA.prev = nodeB;
    //   nodeB.prev = nodeA;
    // } else {
    //   // Setting node A's dependencies
    //   nodeA.next = nodeB.next;
    //   if (nodeB.next?.prev) nodeB.next.prev = nodeA;
    //   nodeA.prev = nodeB.prev;
    //   if (nodeB.prev?.next) nodeB.prev.next = nodeA;

    //   // Setting node B's dependencies
    //   nodeB.next = oldNextA;
    //   if (oldNextA?.prev) oldNextA.prev = nodeB;
    //   nodeB.prev = oldPrevA;
    //   if (oldPrevA?.next) oldPrevA.next = nodeB;
    // }

    // // Handling heads & tails
    // if (this.tail == nodeA) {
    //   this.tail = nodeB;
    // } else if (this.tail == nodeB) {
    //   this.tail = nodeA;
    // }
    // if (this.head == nodeA) {
    //   this.head = nodeB;
    // } else if (this.head == nodeB) {
    //   this.head = nodeA;
    // }
  }

  // Entire list methods
  clear() {
    this.head = null;
    this.tail = null;
  }

  size() {
    let counter = 0;
    let current = this.head;
    while (current){
        counter++;
        current = current.next;
    }
    return counter;
  }

  // Dev method
  dumpList() {
    console.log(`
                Linked list
            ====================
            head: ${this.head?.data}
            tail: ${this.tail?.data}
            `);
    let current = this.head;
    let count = 0;
    while (current) {
      console.log(`
                Node: ${current.data}
                ---------------------
                prev: ${current.prev?.data}
                next: ${current.next?.data}
                `);
      current = this.getNext(current);
      count++;
      if (count > 20) {
        console.log("too many iterations");
        break;
      }
    }
  }

  getNext(node) {
    if (node.next != node && node.next?.next != node) {
      return node.next;
    }
  }

  getPrev(node) {
    if (node.prev != node && node.prev?.prev != node) {
      return node.prev;
    }
  }
}

export class Node {
  prev;
  next;
  data;
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
