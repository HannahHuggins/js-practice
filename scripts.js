// JS and the DOM - using parentNode to traverse up the DOM
// Dom traversal - selecting and element based on its relationship to another element within the DOM

// Using previousElementSibling and insertbEFORE


// NonDocumentTypeChildNode.previousElementSibling - 


/* previousSibling gets you the previous document node 
previousElementSibling allows you to get the previous HTML element
*/

// Object-orientated js 
// class, properties and methods 
// object - info about something you want to use in the code. This contains properties and functions. 
// properties are a series of key-value pairs that hold information about the object. 
//OOP is a way of thinking about and designing a program with objects at it's core. 
// objects are an easy way to store something with properties and manipuilate something using objects. 

//------------------------------
// JavaScript objects 

//object literals and components of objects

// Objects are similar to arrays but denoted with {} rather than [] 

// const ernie = {
//     animal: 'dog', //key value pairs
//     age: 1,
//     breed: 'pug',
//     bark: function () {
//         console.log('woof!'); // This is one way to add methods to object literals
//     }
// }

// Encapsulation - putting properties and methods into a package and attaching it to a variable 

//---------
// Dot notation and bracket notation - 2 ways of accessing an objects properties

// const fruits = ['apple', 'pear', 'strawberry'];

// fruitsLength = fruits.length; // able to access the length property of the array and return the value. 


const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log("woof!");
    }
}

console.log(bernie.age);
console.log(bernie.bark);


ernie.bark();

// accessing properties of an object with dot notation 



const fruits = ['apple', 'pear', 'strawberry'];

fruits[1];

// bracket notation used to access the properties of an object 

console.log(bernie['age']);

ernie['bark']();


var prop = "breed";

ernie[prop]; //able to use this now within the ernie object 


// const me = {
//     firstName = 'Hannah',
//     lastName = 'Dowdall',
//     fullName = function(){
//         console.log(this.firstName + this.lastName);
//     }
// }


// changing and adding properties 