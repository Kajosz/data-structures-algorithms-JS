class Node{
    constructor(value, addPrevious){
        this.value = value;
        this.next = null;
        if (addPrevious) this.prev = null;
    }

}

module.exports = Node;