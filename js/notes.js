// Kekambas-66
// CodingTemple-June-2021
// Week 7 - Day 2 Objects, Callbacks, Closures, Promises & Async
// Brian Stanton
// •
// 9:28 AM
// Today we will talk about Objects, Callbacks, Closures, Promises & Async Programming

// main.js
// Javascript
// Class comments

// Turning in…
// console.log('Hello World!')

// Continue from yesterday with control flow
// The switch case statement

let day = new Date().getDay();

console.log(day);

let literal_day = new Date().toString();

console.log(literal_day);


// Switch Case Statement Syntax
/*
switch(value) {
    case check_value : 
        do something
        break 
    case check_other_value:
        do something
        break
    }
*/


switch(day){
    case 0:
        console.log("Go to Church because it's Sunday")
        break
    case 1:
        console.log("Write code...it's Monday")
        break
    case 2:
        console.log("Test code...it's Tuesday")
        break
    case 3:
        console.log("Test more code...it's Wednesday")
        break
    case 4:
        console.log("Write new feature...it's Thursday")
        break
    case 5:
        console.log("Test new feature...it's Fri-yay!")
        break
    case 6:
        console.log("Take a break...it's Saturday")
        break
};


// Literal Day example with Switch Case Syntax
switch(literal_day.split(" ")[0]){
    case 'Sun':
        console.log("Go to Church because it's Sunday")
        break
    case 'Mon':
        console.log("Write code...it's Monday")
        break
    case 'Tue':
        console.log("Test code...it's Tuesday")
        break
    case 'Wed':
        console.log("Test more code...it's Wednesday")
        break
    case 'Thur':
        console.log("Write new feature...it's Thursday")
        break
    case 'Fri':
        console.log("Test new feature...it's Fri-yay!")
        break
    case 'Sat':
        console.log("Take a break...it's Saturday")
        break
    default:
        console.log("We don't have a case to handle that")
};


// CREATION OF OBJECTS IN JAVASCRIPT
// Simple JavaScript Object

let person = {
    name: 'John',
    age: 27,
    fav_color: 'green'
};

// Accessing data in our object
console.log(person['name']) // Bracket Notation
console.log(person.name) // Dot Notation


// Complex JavaScript Object

let person2 = {
    name: 'Tim',
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'blue',
    teams: [
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
            hockey: 'Las Vegas Golden Knights',
            basketball: 'Oklahoma City Thunder',
            soccer: ['RB Leipzig', 'Juventus']
        }
    ]
}

console.log(person2['prog_languages'][2]);
console.log(person2.prog_languages[2]);

console.log(person2.teams[1].soccer[0])

// JavaScript Object Protype Methods
console.log(person2);
console.log(Object.keys(person2));
console.log(Object.values(person2));

// Bad/Sad Path of looping through objects in JS
for (let i=0; i < person2.length; i++){
    console.log(person2[i])
};

// Happy path for looping through objects in JS looking for keys

for (let i=0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
};

// List values from person2 object that are arrays
for (let i=0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
};

// Create our own Object Prototypes -- with ES5 Method Syntax
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // A Method inside of a JS Prototype
    this.printInfo = function(color, wheels=0){
        console.log(`This is a ${this.year} ${this.make} ${this.model} and has ${wheels} wheels and is ${color}!`)
    };
}

// Create a new instance of prototype
let my_car = new Car('Ford', 'Mustang', 2020);
my_car.printInfo('Hot Pink', 4);

my_car.printInfo('Blue')


// Another Prototype using ES6 methods
function Person(name, age){
    this.name = name;
    this.age = age;

    // A method inside of JS prototype
    this.printInfo = () => {
        return `You're ${this.name} and you are ${this.age} years young!`
    }
}

let new_person = new Person('Brian', 27);

console.log(new_person.printInfo())

// JavaScript Classes
class Human{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // A method inside of a JS class
    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
};


// Create instance of human class
let wilma = new Human('Wilma', 25, 'Female');
console.log(wilma.printInfo());

let fred = new Human('Fred', 25, 'Male');
console.log(fred.printInfo());


// JavaScript Inheritance using Classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }

    isBabyWalking() {
        let isWalking;
        if (this.walking){
            isWalking = 'Baby is walking!';
        } else {
            isWalking = 'Baby still crawls';
        }
        return isWalking
    }

    printInfo(){
        let info = super.printInfo()
        return info + `\nWalking: ${this.walking}`
    }
}

// Create an instance of Baby
let johnny = new Baby('Johnny', 1, 'Male', true);
console.log(johnny.printInfo());
console.log(johnny.isBabyWalking());

// -- JavaScript Closure -- //
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.
*/

let count_up = (function(){
    let counter = 0; // This will be our private variable
    console.log("hit"); // Show that initial self-invoking function ran once
    return function(){return counter++}
})()

let addNames = (function(){
    let names = [];
    console.log("Adding Names");
    return function(name){
        names.push(name)
        return names
    }
})()

// Async JavaScript Section //

// -- JavaScript Callbacks -- //
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic Example
function first(){
    console.log(1);
};

function second(){
    console.log(2);
};

// first();
// second();


// But what happens when we add a delay to the execution
function first_delay(){
    // Simulation of delay
    setTimeout(function(){
        console.log(1)
    }, 5000)
}

function second_delay(){
    console.log(2);
}

// first_delay()
// second_delay()

// Callback Function Syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`);
    return callback()
};

// console.log(doHomework('JavaScript', () => {
//     return 'Done with Homework!'
// }));

/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷
                })
            })
        })
    })
*/


// We solve this problem with Promises!


// -- Creating a JS Promise --

const isEvenNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0){
            resolve(true);
        } else {
            reject(false);
        }
    })
}


isEvenNumber(7).then((result) => {
    console.log('Even Number', result)
}).then(

).then(

).catch((error)=>{
    console.log('Odd Number', error)
})

// Another Example with Async/Await
function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// function to add base salary slowly
function slow_addition(n1, n2){
    return new Promise( (resolve) =>{
        setTimeout( () => resolve(n1+n2), 2000)
    })
};


function increase_salary_slow(base, increase){
    const new_salary = slow_addition(base, increase)
    console.log(`New Salary: ${new_salary}`)
    return new_salary
};


// create an async function with await
async function increase_salary_async(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary;
};

