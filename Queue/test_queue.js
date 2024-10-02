import Queue from "./queue.js";

main();

function main() {
  const testq = new Queue();
  testq.enqueue("a");
  testq.enqueue("b");
  testq.enqueue("c");
  console.log(`Head after adding abc: ${testq.head.data}`);
  console.log(`Tail after adding abc: ${testq.tail.data}\n`);
  console.log("For of test:");
  for (const node of testq) {
    console.log("Node:", node);
  }

  console.log("\nDequeue:");
  testq.dequeue();
  testq.dumpList();
  console.log("\nList after dequeuing 5 times:");
  for (let i = 0; i < 5; i++) {
    testq.dequeue();
  }
  console.log(`\nHead after adding abc: ${testq.head}`);
  console.log(`Tail after adding abc: ${testq.tail}\n`);
  testq.dumpList();
}
