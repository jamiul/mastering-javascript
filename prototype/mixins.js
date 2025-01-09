// When to Use Inheritance?
// "Favor Composition over Inheritance"
// Mixins:

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
}

const canWalk = {
    walk: function() {
        console.log('walking');
    }
}

const canSwim = {
    swim: function() {
        console.log('Swiming');
    }
}

// one way
// const person = Object.assign({}, canEat, canWalk);

// Person constructor
function Person(){}
// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

// Goldfish constructor
function Goldfish() {}
// Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Goldfish.prototype, canEat, canSwim);
const fish = new Goldfish();
console.log(fish);