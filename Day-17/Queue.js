// Queue Implementation In JavaScript

// Class Queue
class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    // Inserting Element called as enequeue
    enqueue(element) {
        this.items[this.backIndex] = element;
        this.backIndex++;
        console.log(element + "Inserted");
        return element + "Inserted";
    }

    // Deleting element from queue
    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        console.log("Item deleted is : ", item);
        return item;
    }

    // Peek()- showing the first item of the Queue
    peek() {
        return this.items[this.frontIndex]
    }

    // Print Queue
    printElement() {
        console.log(this.items);
        return this.items;
    }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.printElement();
queue.enqueue(8);
queue.printElement();
queue.dequeue();
queue.enqueue(9);
queue.dequeue();
queue.printElement();
