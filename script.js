// import Node from "./node.js";
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList extends Node {
  constructor(value, nextNode) {
    super(value, nextNode);
    this.head = null;
    this.length = 0;
  }
  append(value) {
    const node = new Node(value);

    // checks if this.head = null sets new node to head
    // else will set current head to current
    // skip while loop cause head nextNode does equal null so we set the nextNode to new node
    // in the loop we set current to the nextNode after will be null so we skip loop
    // then set newNode to nextNode
    if (this.head === null) this.head = node;
    else {
      let current = this.head;
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    this.length++;
  }
  prepend(value){
    
  }
}
const list = new LinkedList(); 




