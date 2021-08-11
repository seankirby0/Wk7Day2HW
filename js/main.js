console.log('Leggo')

// Looping with arrays and strings

// Create an array of names
let names = ['Jim', 'Alice', 'Frank', 'Bob', 'Mary']

console.log(names)

// Method 1 for looping through an array
for (let i = 0; i < names.length; i ++){
    console.log(i, names[i])
}

// Method 2 for looping through an array - for ... of
for (const name of names){
    console.log(name)
}


// Method 1 for looping through a string
let sentence = 'This is my sentence'

for (let k = 0; k < sentence.length; k++){
    console.log(k, sentence[k])
}


// Method 2 - for ... of
for (const letter of sentence){
    console.log(letter)
}


// ARRAY METHODS

let newNames = ['Justin', 'Nicole', 'Molly', 'Bill']


let myFunc = element => console.log(element)

// Using the .forEach() Mmethod:
newNames.forEach(myFunc);

// USing the .forEac() method for element and index
newNames.forEach((el, idx) => {console.log(el, idx)})

let myNewFunc = (el,idx) => {console.log(idx,el)};

newNames.forEach(myNewFunc)

// .forEach() method with 3 parameters in callback
newNames.forEach((el, idx, arr) => {console.log(el, idx, arr)});

console.log(newNames.toString());

// .map() method
// creates a new array populated with the results of calling a provided function on every element in the calling array
let upperFunc = element => element.toUpperCase();
let upperNames = newNames.map(upperFunc);
console.log(upperNames);
console.log(newNames);

// .filter() method
let isLongName = (e) => e.length > 5

let longNames = newNames.filter(isLongName);
console.log(longNames);

// .reduce() method
const nums = [2, 4, 6, 8, 10]

let reducerFunc = (accumulator, currentNum) => {
    return accumulator + currentNum
}

let numsReduced = nums.reduce(reducerFunc);
console.log(numsReduced);
//  OR
let total = 0
for (num of nums){
    total += num
};
console.log(total);

// .join() method
const strNames = newNames.join(', ');
console.log(strNames);

// .slice() method
console.log('Slice Method')
console.log(newNames);
console.log(newNames.slice())
console.log(newNames.slice(2)) // inclusive
console.log(newNames.slice(1,3)) // end is excluded
console.log(newNames.slice(-1)) 
console.log(newNames.slice(-4)) 

// .splice() method
console.log('Splice Method')
console.log(newNames);
let capturedValue = newNames.splice(1, 2, 'Willy');
console.log('THis item was removed: ' + capturedValue);
console.log(newNames);
newNames.splice(1, 2, 'Brian', 'Matt', 'Anna');
console.log(newNames)