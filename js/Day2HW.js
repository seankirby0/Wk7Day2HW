//============ Exercise #1 ============//
/*
Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" 
Expected output
Given arr: ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
Output arr: ["even index","Baseball","even index","Goku","even index","Rodger"]
*/



const testArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(testArr){
    // let newList = []
    for (n in testArr) {
        if ([n] % 2) {
            return testArr.splice('even index')
        }
        console.log(replaceEvens)
    }
}



//============ Exercise #2 ============//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Taco Bell",
    burgers:"Shake Shack",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Shamrock Shake",
        cupids_candies:"Chocolate Malt"
    }]
}
// console.log(person)
for (const key in person){
    console.log(key)
    console.log(person[key])
}