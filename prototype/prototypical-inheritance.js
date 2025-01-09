// Prototypical Inheritance
// function Shape() {}

// Shape.prototype.duplicate = function() {
//     console.log("Duplicate");
// }

// function Circle(radius) {
//     this.radius = radius;
// }

// // Circle.prototype.constructor = Circle;
// // new Circle.prototype.constructor() = new Circle();
// Circle.prototype = Object.create(Shape.prototype);
// // Every objects in js has constructor property.
// // Resetting the constructor
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function() {
//     console.log("Draw");
// }

// const s = new Shape();
// const c = new Circle(2);

// Super constructor
// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.duplicate = function() {
//     console.log("Duplicate");
// }

// function Circle(radius, color) {
//     Shape.call(this, color);
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function() {
//     console.log("Draw");
// }

// const s = new Shape();
// const c = new Circle(2, "red");

// Intermediate function inhertance.
// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.duplicate = function() {
//     console.log("Duplicate");
// }

// // Intermediate function inhertance.
// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Circle(radius, color) {
//     Shape.call(this, color);
//     this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.draw = function() {
//     console.log("Draw");
// }

// function Square(size) {
//     this.size = size;
// }

// extend(Square, Shape);

// const s = new Shape();
// const c = new Circle(2, "red");

// Method overriding.
// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Shape() {}

// Shape.prototype.duplicate = function() {
//     console.log("Duplicate");
// }

// function Circle() {}

// extend(Circle, Shape);

// Circle.prototype.duplicate = function() {
//     Shape.prototype.duplicate.call(this);

//     console.log("Duplicate from circle");
// }

// const c = new Circle();

// Polymorphism
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log("Duplicate from circle");
}

function Square(){}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log("Duplicate from Square");
}

const shapes = [
    new Circle(),
    new Square()
];

for (let shape of shapes) {
    shape.duplicate();
}
