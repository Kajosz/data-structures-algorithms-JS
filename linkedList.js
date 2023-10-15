const Node = require('./node.js');

class LinkedList{
    constructor(value){
        if (!value){
            this.head = null;
            this.length = 0;
            return;
        }
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    print(){
        if (this.length === 0) return;
        let current = this.head;
        let printed = '';
        while (current){
            printed += `${current.value} -> `;
            current = current.next;
        }
        printed = printed.slice(0, -4);
        console.log(printed);
    }

    push(value){
        if (!value) return;
        const newNode = new Node(value);
        if (this.length == 0){
            this.head = newNode;
            this.length = 1;
            return;
        }

        newNode.next = this.head
        this.head = newNode;
        this.length++;
        
    }

    // pop(){
    //     if (!value)
    // }

    toArray(){
        if (this.length === 0) return [];
        const result = [];
        let current = this.head;
        while (current){
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

module.exports = LinkedList;
