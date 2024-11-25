import Tree from "./Tree.js";

const tree = new Tree();
console.log(tree);
for (let i = 0; i < 20; i++) {
  tree.addValue(i);
}
tree.dump();
console.log(tree.findValue("f"));
console.log(tree.removeValue("f"));
console.log(tree.removeValue(6));
tree.dump()
console.log(tree.removeValue(1));
for (let i = 20; i < 30; i++) {
    tree.addValue(i);
}
tree.dump()

tree.removeValue(0);
tree.dump()
for (let i = 30; i < 40; i++) {
    tree.addValue(i);
}
tree.dump()