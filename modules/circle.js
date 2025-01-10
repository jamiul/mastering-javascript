
// 02 - Common JS Module
// Implementation Detail
/* const _radius = new WeakMap();

// Public Interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle and radius: ' + _radius.get(this));
    }
}

module.exports = Circle; */

// 03 - ES6 Modules
const _radius = new WeakMap();

// Public Interface
export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle and radius: ' + _radius.get(this));
    }
}