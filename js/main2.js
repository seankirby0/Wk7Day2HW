// JavaScript Object

// Simple JavaScript Object
let person = {
    name : 'Hannah',
    age : 33,
    favColor : 'red'
};

console.log(person);

// Accessing data in objects
console.log(person['name']) // Bracket notation
console.log(person['age'])   // Bracket notation
console.log(person.name)   // Dot notation
console.log(person.age)   // Dot notation

console.log('BREAK')  
// Complex JS Object
let person2 = {
    name : 'Tim',
    age : 29,
    programmingLang : ['JavaScript', 'Python', 'C++', 'Java'],
    favColor : 'blue',
    teams : [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Chicago Red Stars']
        },
        {
            baseball: 'Washington Nationals',
            football: 'Los Angeles Rams',
            hockey: ['Las Vegas Golden Knights', 'Seatle Kraken'],
            basketball: 'Oklahoma City Thunder',
            soccer: 'Austin FC'
        }
    ]
};
// console.log person2 name, aga and one chicago bball team he likes
// console.log(person2['name', 'age'])   my try
const name = person2.name;
console.log(name);
const age = person2.age;
console.log(age);
const chiBull = person2.teams[0].basketball[0];
console.log(chiBull)

const personInfo = `${name} is ${age} years old and he is a ${chiBull} fan!`
console.log(personInfo);

// Looping Through an Object
console.log('LOOPING')
console.log(person2)
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Bad/Sad Path for looping through an object in JS
for (let i=0; i < person2.length; i++){
    console.log(person2[i])
}

// Good/Happy Path for looping through an object in JS - Object.keys
console.log('Method 1')
for (let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
    console.log(Object.values(person2)[i])
}

// Method 2 - for ... in
console.log('Method 2')
for (const key in person2){
    console.log(key)
    console.log(person2[key])
}

// How to: List values from person2 object that are Arrays
console.log('BREAK')
for (const k in person2){
    if (Array.isArray(person2[k])){
        for (let val of person2[k]){
            console.log(val)
        }   
    }
}

// Same thing with Object.keys/ Object.values
for (let i=0; i < Object.keys(person2).length; i++){
    if (Array.isArray(Object.values(person2)[i])){
        for (let j=0; j < Object.values(person2)[i].length; j++){
            console.log(Object.values(person2)[i][j])
        }
    }
};

console.clear()
// JAVASCRIPT PROTOTYPES

let animal = {}
animal.name = 'Buddy'
animal.energy = 10

animal.eat = function(amount){
    console.log(`${this.name} has eaten ${amount}`);  //this.name == self.name
    this.energy += amount;
}

animal.sleep = function(length){
    console.log(`${this.name} is sleeping for ${length}`)
    this.energy += length
}

animal.play = function(length){
    console.log(`${this.name} is playing for ${length}`)
    this.energy -= length
}


console.log(animal);
console.log(animal.energy);
animal.eat(20);
console.log(animal.energy);
animal.play(25);
console.log(animal.energy);
animal.sleep(15);
console.log(animal.energy);

console.clear()
// Functional Instantiation

// function Animal(name, energy){
//     let animal = {}
//     animal.name = name
//     animal.energy = energy

//     animal.eat = function(amount){
//         console.log(`${this.name} has eaten ${amount}`);  //this.name == self.name
//         this.energy += amount;
//     }

//     animal.sleep = function(length){
//         console.log(`${this.name} is sleeping for ${length}`)
//         this.energy += length
//     }

//     animal.play = function(length){
//         console.log(`${this.name} is playing for ${length}`)
//         this.energy -= length
//     }

//     return animal
// }

// const buddy = Animal('Buddy', 10);
// const snoopy = Animal('Snoopy', 15);

// console.log(buddy)
// console.log(snoopy)

// // Compared example
// function greeting(name){
//     return 'Hello, ' + name
// }

// brian = greeting('Brian')

// console.log(brian)

// Functional Instantiation with Shared Methods
// const animalMethods = {
//     eat: function(amount){
//         console.log(`${this.name} has eaten ${amount}`);  //this.name == self.name
//         this.energy += amount;
//     },

//     sleep: function(length){
//         console.log(`${this.name} is sleeping for ${length}`)
//         this.energy += length
//     },

//     play: function(length){
//         console.log(`${this.name} is playing for ${length}`)
//         this.energy -= length
//     }

// }

// function Animal(name, energy){
//     let animal = {}
//     animal.name = name
//     animal.energy = energy

//     animal.eat = animalMethods.eat

//     animal.sleep = animalMethods.sleep

//     animal.play = animalMethods.play

//     return animal
// }

// const buddy = Animal('Buddy', 10);
// const snoopy = Animal('Snoopy', 15);

// console.log(buddy)
// console.log(snoopy)

// // Object.create()
// const parent = {
//     name: 'Laurie',
//     age: 60,
//     heritage: 'Irish'
// }

// let child = Object.create(parent);
// child.name = 'Brian'
// child.age = 27

// console.log(child)

// let myObject = Object.create(null)

// FUNCTIONAL INSTANTIATION WITH OBJECT.CREATE
const animalMethods = {
    eat: function(amount){
        console.log(`${this.name} has eaten ${amount}`);  //this.name == self.name
        this.energy += amount;
    },

    sleep: function(length){
        console.log(`${this.name} is sleeping for ${length}`)
        this.energy += length
    },

    play: function(length){
        console.log(`${this.name} is playing for ${length}`)
        this.energy -= length
    }

}

function Animal(name, energy){
    let animal = Object.create(animalMethods)
    animal.name = name
    animal.energy = energy

    // animal.eat = animalMethods.eat

    // animal.sleep = animalMethods.sleep

    // animal.play = animalMethods.play

    return animal
}
const buddy = Animal('Buddy', 10);
const snoopy = Animal('Snoopy', 15);

console.log(buddy)
console.log(snoopy)
