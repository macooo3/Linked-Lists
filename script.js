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
   

    return this.value
  }
  
}
const list = new LinkedList()

list.append('string')
list.append('string2')

console.log(list.append('string3'))




// class ListNode {
//   constructor(data) {
//       this.data = data
//       this.next = null                
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//       this.head = head
//   }
// }

// let node1 = new ListNode(2)
// let node2 = new ListNode(5)
// node1.next = node2

// let list = new LinkedList(node1)

// console.log(list.head.next.data) //returns 5



