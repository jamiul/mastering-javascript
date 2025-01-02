// 1 - Inheritance:
// IS-A relationship
// Classical Inheritance
// Circle <== Shape ==> Square

// 2 - Prototipical Inheritance:
// 3 - Multi-level Inheritance:
// 4- Property Descriptor:
let person = { name: 'Jamiul' };

// let objBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objBase, 'toString');
// console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: true,
    configurable: true,
    enumerable: true
});

// delete person.name;
// person.name = 'Alam';
console.log(person);

// Prototype vs Instance Members:

// Circle constructor
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const c1 = new Circle(1);
// const c2 = new Circle(2);
// Problems:
// Memory waste by keeping copy large number of objects.

// Solution:
// Prototypical Inheritance point to the same memory
// function Circle(radius) {
//     // Instance menbers
//     this.radius = radius;

//     this.move = function() {
//         console.log('move');
//     }
// }

// // Prototype members
// Circle.prototype.draw = function() {
//     this.move();
//     console.log('draw');
// }

// const c1 = new Circle(1);
// const c2 = new Circle(2);

// Circle.prototype.toString = function() {
//     return 'Circle with radius ' + this.radius;
// }

// 7 => Ierating Instance and Prototype Mebmers:
// Return instance members
// console.log(Object.keys(c1));

// Returns all members (instance + prototype)
// for(let key in c1) console.log(key)

// 8 => Avoid Extending the Built-in Objects:
// Don't modify objects you don't own.

