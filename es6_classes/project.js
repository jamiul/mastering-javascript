const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    // Adds an element to the stack
    push(element) {
        _items.get(this).push(element);
    }

    // Removes and returns the top element of the stack
    pop() {
        const items = _items.get(this);

        if (items.length === 0) {
            throw new Error("Stack is empty.");
        }

        return items.pop();
    }

    // Returns the top element without removing it
    peek() {
        const items = _items.get(this);

        if (items.length === 0) {
            throw new Error("Stack is empty.");
        }

        return items[items.length - 1];
    }

    // Returns the number of elements in the stack
    get count() {
        return _items.get(this).length;
    }
}

// Example usage
const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
stack.pop(); // Removes 'c'
console.log(stack.count); // Outputs: 2
console.log(stack.peek()); // Outputs: 'b'
