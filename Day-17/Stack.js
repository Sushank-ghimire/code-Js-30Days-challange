// Stack Implementation In JavaScript

// Class Stack 
class Stack {
    constructor() {
        this.items = [];
    }
    // push(item) - Add item inside the stack list
    pushItem(element) {
        this.items.push(element);
    }

    // pop() - To delete and item from the stack
    popItem() {
        if(this.items.length === 0 || this.items.length < 0) new Error("Stack Is Impty!");
        return this.items.pop();
    }

    // peek() - To take the items of the top of the Stack but does'nt delete it
    peekItem() {
        // returns the last element from the stack without deleting it
        console.log(this.items[this.items.length - 1]);
        return this.items[this.items.length - 1];
    }

    // isEmpty()
    isEmpty() {
        if(this.items.length === 0 || this.items.length < 0) return true;
        return false;
    }

    // printStack()
    printStackElement() {
        console.log(this.items);
        return this.items;
    }
}

const stackFirst = new Stack();
stackFirst.isEmpty();
stackFirst.pushItem(6);
stackFirst.pushItem(7);
stackFirst.pushItem(8);
stackFirst.pushItem(9);
stackFirst.printStackElement();
stackFirst.popItem();
stackFirst.printStackElement();
stackFirst.peekItem();
stackFirst.printStackElement();
stackFirst.isEmpty();