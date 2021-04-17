// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0
        let node = this.head

        while (node) {
            counter++
            node = node.next
        }
        return counter
    }


    getFirst() {
        return this.head
    }

    getLast() {

        let node = this.head

        while (node) {
            if (!node.next) {
                return node
            }
            node = node.next
        }

    }
    clear() {
        this.head = null
    }

    removeFirst() {

        if (!this.head) {
            return
        }
        return this.head = this.head.next
    }
    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let node = this.head
        if (!node) {
            return null
        }
        while (index) {
            node = node.next
            index--
        }
        return node
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }
    }

}


module.exports = { Node, LinkedList };