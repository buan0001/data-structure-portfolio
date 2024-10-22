import Stack from "./Stack.js";

function testStack(){

const stack = new Stack()

stack.push(1)
console.log(stack);
const popped = stack.pop()
console.log("Popped with 1 element in list:", popped);

stack.push(2)
stack.push(3)

console.log(stack);
console.log(stack.size());
console.log(stack.get(5));
console.log(stack.get(1));
console.log(stack.get(0));


// stack.push(2)
// stack.push(3)




}

testStack()