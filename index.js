const LinkedList = require('./linkedList.js');

const myLinkedList = new LinkedList(2);
myLinkedList.push(1);
myLinkedList.push(3);
myLinkedList.push(7);
myLinkedList.print();
console.log(myLinkedList.toArray())

