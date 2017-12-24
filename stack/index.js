
class Stack {
    constructor() {
        this.internalData = [];
        this.counter = 0;
    }

    push(item) {
        this.internalData.push(item);
        this.counter = this.counter + 1;
    }

    pop() {
        var lastElement = this.internalData[this.counter - 1];
        this.internalData.splice(this.counter - 1, 1);
        this.counter = this.counter - 1;
        return lastElement;
    }

    length() {
        return 0;
    }

    printStack() {
        console.log(this.internalData);
    }
}

var mystack = new Stack();

mystack.push(1);
mystack.push(2);
mystack.push(3);
mystack.push(4);
mystack.push(5);

var value = mystack.pop();

console.log(value);

mystack.printStack();

value = mystack.pop();

console.log(value);

value = mystack.pop();

console.log(value);

mystack.printStack();