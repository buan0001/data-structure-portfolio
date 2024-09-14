import DoublyLinkedList, { Node } from "./doublyLinkedList.js";

window.addEventListener("load", start);

function start() {
  const node1 = new Node("a");
  const node2 = new Node("b");
  const node3 = new Node("c");
  const node4 = new Node("d");
  const node5 = new Node("e");
  //   node1.next = node2;
  //   node2.next = node3;
  //   node2.prev = node1;
  //   node3.prev = node2;
  //   const list = new DoublyLinkedList();
  const list = new DoublyLinkedList();

//   list.addNodeLast(node1);
//   list.addNodeLast(node2);
//   list.addNodeLast(node4);
// //     list.addNodeFirst(node3)
//     // list.addNodeFirst(node2)
//     list.addNodeFirst(node1)
  //   list.tail = node3;
  ;
//   list.addNodeLast(list.removeLast());
  list.dumpList();
  list.swapNodes(node5,node1)
//   list.insertAfterNode(node5, node1)
//   list.insertAfterNode(node5, node4)
//   list.insertBeforeNode(node5, node1)
//   list.insertBeforeNode(node5, node4)
  list.dumpList();
  console.log(list.size());
  

  window.list = list;
}
