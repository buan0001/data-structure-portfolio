export default class DoublyLinkedList {
    head;
    tail;
    constructor(){}

    addLast( data ){}
    addFirst( data ){}
    get( index ){}
    indexOf( data ){}
    insertAfter( index, data ){}
    insertBefore( index, data ){}
    first(){}
    last(){}
    remove( data ){}
    removeIndex( index ){}
    removeFirst(){}
    removeLast(){}

    // Methods to work directly on nodes
    addNodeLast( newNode ){}
    addNodeFirst( newNode ){}
    insertAfterNode( newNode, existingNode ){}
    insertBeforeNode( newNode, existingNode ){}
    removeNode( existingNode ){}
    nodeAt( index ){}
    swapNodes( nodeA, nodeB ){}

    // Entire list methods
    clear(){}
    size(){}
}

export class Node {
    previous;
    next;
    data;
    constructor(data){
        this.data = data;
    }
}