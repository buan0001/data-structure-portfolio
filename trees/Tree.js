export default class Tree {
  root = null;
  constructor(value) {
    if (value) {
      this.root = new Node(value);
    }
  }

  dump() {
    if (this.root) {
      let printString = "";
      function recursivePrint(node, depth = 0) {
        printString += "\n";
        for (let i = 0; i < depth; i++) {
          printString += "\t";
        }
        printString += `${node.value}`;
        node.childNodes.forEach((child) => recursivePrint(child, depth + 1));
      }
      recursivePrint(this.root);
      console.log(printString);
    } else {
      console.log("Empty tree");
    }
  }

  addValue(value) {
    const maxChildren = 4; // Arbitrary value to decide whether we should add the value to the current node or find a new one

    if (this.root) {
      const queue = [];
      queue.push(this.root);
      let current;
      while (queue[0]) {
        current = queue.shift();

        if (current.childAmount < maxChildren) {
          return current.appendChild(new Node(value));
        } else {
          for (const child of current.childNodes) {
            queue.push(child);
          }
        }
      }
    } else {
      this.root = new Node(value);
    }
  }
  
  findValue(value) {
    // console.log("finding value:",);

    let node = this.root;
    let found;
    function recursiveFind(node) {
      console.log(node.value, value);
      if (node.value == value) {
        return node;
      } else if (node.hasChildNodes()) {
        // console.log(node, "has children");
        for (const child of node.childNodes) {
          found = recursiveFind(child);
          if (found) {
            return found;
          }
        }
      }
    }
    found = recursiveFind(node);
    return found;
  }

  removeValue(value) {
    const found = this.findValue(value);
    if (found) {
      if (found.parent) {
        // Detach the the found's parent's attachment to found
        for (const child of found.childNodes) {
          // And all found's children to found's parent
          found.parent.appendChild(child);
        }
        found.parent.removeChild(found);
      }
      // If we're removing the root node, we have to replace the root with something else
      else if (found.hasChildNodes()) {
        if (found.firstChild == found.lastChild) {
          console.log("First child == last child");

          // We just removed the root node and it only had 1 child - simplest case
          // Simply replace the child with found
          found.firstChild.parent = null;
          this.root = found.firstChild;
        } else {
          console.log("Finding new parent for all these kids");

          const newRoot = found.firstChild; // Arbitrarily make the first child the new root
          found.removeChild(newRoot); // Remove the new root before appending all the children, or it will become its own child
          for (const child of found.childNodes) {
            newRoot.appendChild(child);
          }
          this.root = newRoot;
          this.root.parent = null; // Null the parent AFTER appending the children - or it will be tagged as its own parent!        
          console.log(this.root);
          
        }
      }
      // Only 1 node in the tree
      else {
        this.root = null;
      }
      return found;
    } else {
      console.log("No such element");
    }
  }
}

class Node {
  value = null;
  parent = null;
  childNodes = [];
  constructor(value = null, parent = null) {
    this.value = value;
    this.parent = parent;
  }

  get firstChild() {
    return this.childNodes[0];
  }

  get lastChild() {
    return this.childNodes[this.childNodes.length - 1];
  }

  get childAmount() {
    return this.childNodes.length;
  }

  hasChildNodes() {
    return this.childNodes.length > 0;
  }

  appendChild(child) {
    child.parent = this;
    return this.childNodes.push(child);
  }

  removeChild(child) {
    const foundChild = this.childNodes.find((kid) => kid.value == child.value);
    if (foundChild) {
      foundChild.parent = null;
      this.childNodes = this.childNodes.filter((kid) => kid != foundChild);
      return foundChild;
    }
  }

  replaceChild(newChild, oldChild) {
    const foundChild = this.childNodes.findIndex((kid) => kid.value == oldChild.value);
    if (foundChild) {
      const removed = this.childNodes[foundChild];
      removed.parent = null;
      this.childNodes[foundChild] = newChild;
      return removed;
    }
  }
}
