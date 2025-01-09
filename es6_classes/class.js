// 01 - Basic class
/**
class Circle{
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);
*/


// 02 - Hoisting
// 03 - Static Methods
/**
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method.
    draw() {
        console.log('draw');
    }

    // Static Method.
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{ "radius": 1}');
console.log(circle);
*/
// 04 - this Keyword.
// 'use strict';

// const Circle = function() {
//     this.draw = function() { console.log(this) };
// };

// const c = new Circle();
// // Method call
// c.draw();

// const draw = c.draw;
// // Function call
// draw()
// By Default the body of the class execute strict mode.
/* class Circle {
    draw() {
        console.log(this);
    }
}

const circle = new Circle();
const draw = circle.draw;
draw(); */

// 05 - Private Members Using Symbols.
/* const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {
        console.log('drawing..');
    }
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]); */

// 06 - Private Members Using WeakMaps.
/* const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        _move.set(this, () => {
            console.log('Moving...', this);
        })
    }

    draw() {
        _move.get(this)();
        console.log('Drawing...', _radius.get(this));
    }
}

const c = new Circle(1); */

// 07 - Getters and Setters
/* const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if(value <= 0) throw new Error('Inavalid radius');
        _radius.set(this, value);
    }
}

const c = new Circle(1); */

// 08 - Inheritance
/* class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('moving');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('Drawing');
    }
}

const c = new Circle('red', 1); */

// 09 - Method Overriding
class Shape {
    move() {
        console.log('Moving');
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log('Circle is moving');
    }
}

const c = new Circle();


