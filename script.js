// import Node from "./node.js";
class Node {
  constructor(value = null, nextNode = null){
   this.value = value;
   this.nextNode = nextNode;
  }
}

class LinkedList extends Node {
  constructor(value, nextNode) {
    super(value, nextNode);
  }
  append(value){
    if(this.value === null)
    {this.value = {head:{
      value:value,
      next: this.nextNode
    }}}
   
    {
      this.value.head.next = {
        value:value,
        next: this.nextNode
      }
    }
    return this.value
  }
  
}
const list = new LinkedList()

list.append('string')
list.append('string2')

console.log(list.append('string3'))




