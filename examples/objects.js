var flyFunction = function() {
    console.log('flying');
};
flyFunction();

var superman = {
    heroName : 'SuperMan',
    sayHello : function() {
        console.log('Hello I\'m ' + this.heroName);
    }
};

superman.sayHello(); // Hello I'm SuperMan

var failThis = superman.sayHello;
failThis(); // Hello, I'm undefined

var hello = failThis;
hello.call(superman); // Hello I'm SuperMan

// not preferred way of instatiating objects through constructor function
function SuperHero(name, strength) {
    this.name = name;
    this.strength = strength;
};

var batman = new SuperHero('Batman', 100);
console.log('Power of ' + batman.name + ' is ' + batman.strength);

//-------------------
// Inheritance
//-------------------
var avangersHero = {
    editor : 'Marvel'
};

var ironMan = {};

// adding to prototype of instance
ironMan.__proto__ = avangersHero;

console.log('Iron Man is copyrighted by ' + ironMan.editor);

// adding to constructor functions prototype - not recommended by https://blog.angular-university.io/javascript-for-java-developers/
SuperHero.prototype.sayHi = function() {
    console.log('Hi');
};
batman.sayHi();

// recommended way
var superHeroPrototype = {
    sayHello : function() {
        console.log('Hello, my name is ' + this.name);
    }
}

var flash = Object.create(superHeroPrototype);
flash.name = 'Flash';

flash.sayHello();

// Modules and Encapsulation
function createHero(heroName) {
    var name = heroName;

    return {
        fly : function(destination) {
            console.log(name + ' flying to ' + destination);
        }
    }
}

var megaman = createHero('Megaman');
megaman.fly('the Moon');
//console.log(megaman.name); // undefined