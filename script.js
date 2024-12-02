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
  }
  append(value) {
    const node = new Node(value);
    // checks if this.head = null sets new node to head
    // else will set current head to current
    // skip while loop cause head nextNode does equal null so we set the nextNode to new node
    // in the loop we set current to the nextNode after will be null so we skip loop
    // then set newNode to nextNode
    if (!this.head) this.head = node;
    else {
      let current = this.head;
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }

    return this.head;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      let extend = this.head;
      this.head = node;
      this.head.nextNode = extend;
    }
    console.log(this.head);
  }

  size() {
    let count = 1;
    if (this.head === null) return 0;
    else {
      let current = this.head;
      while (current.nextNode != null) {
        count++;
        current = current.nextNode;
      }
    }
    return count;
  }
  head() {
    return this.head;
  }

  tail() {
    if (this.head.nextNode === null) return this.head;
    else {
      let current = this.head;
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      console.log(current);
    }
  }

  at(index) {
    let count = 1;
    if (index == count) {
      return this.head;
    } else {
      let current = this.head;
      while (count != index) {
        current = current.nextNode;
        count++;
      }
      return current;
    }
  }
  pop() {
    let current = this.head;
    let prev;
    while (current.nextNode != null) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
    return this.head;
  }
  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    let count = 1;
    while (current != null) {
      if (current.value === value) {
        return count;
      }
      current = current.nextNode;
      count++;
    }
    return false;
  }
  toString(){
    let current = this.head;
    let string =''
    while (current !=null){
      if(current.value){
        string +=`(${current.value}) -> `
      }
      current = current.nextNode;
    }
    return string += 'null'
  }
}
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
// list.tail();
// console.log(list.size());
// console.log(list.at(4));
// console.log(list.pop());
console.log(list.contains("turtle"));
console.log(list.find("turtle"));
console.log(list.toString());
