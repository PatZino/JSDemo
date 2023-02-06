'use strict';

const productId = 1234;
console.log(productId);
let myName = 'Pat';
console.log(typeof productId);

let price = `Hello ${myName}`;
showMessage(price.toUpperCase());
console.log(price);
console.log(price.substring(3));

// object
let person = {
    firstName: 'John',
    lastName: 'Adams',
    age: 32,
    partTime: false
};

// program flow
if(productId > 50){
    showMessage(person.firstName + ' ' + person.lastName);
}

if(+(1.1 + 1.3).toFixed(2) === 2.4){
    showMessage('True');
}

// functions
function showMsg(){
    console.log('This is a function');
}

showMsg(); // calling a function

// function expressions
let fn = function (){
    console.log('This is a function expression');
}

fn();

let fn2 = function loggingFunction(){
    console.log('This is a function expression');
}

fn2();
//**  fn2() can not be called with loggingFunction(). loggingFunction() was only added for debugging purpose

//passing parameters to functions

function showMsgWithParameters(firstMessage, secondMessage){
    console.log(firstMessage, secondMessage);
}

showMsgWithParameters('Hello ', 'Patricia');

//function return values
function getSecretCode(value){
    let code = value * 42;
    return code;
}

console.log(getSecretCode(23)); 

let key = 42;

function getSecretCode2(value){

    let keyGenerator = function(){
        let key = 12;
        console.log('in keyGenerator: ', key);
        return key;
    }

    let code = value * keyGenerator();
    console.log('in keyGenerator: ', key);
    return code;
}

getSecretCode2(2);

// Object and DOM - Document Object Model
// Object parameters

let mySymbol = Symbol();

let person2 = {
    firstName: 'Pat',
    lastName: 'Zino',
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation',
    showInfo: function(){
        showMessage(this.lastName);
    },
    showInfo2: function(realAge){
        showMessage(this.firstName + ' is ' + realAge);
    }
};

console.log(person2.partTime);
person2['partTime'] = true;
console.log(person2.partTime);
person2.showInfo();
person2.showInfo2(24);

// passing objects to functions

function incrementAge(person2){
    person2.age++;
}

incrementAge(person2);
console.log(person2.age);

// standard built-in objects -- https://developer.mozilla.org/en-US/docs/Web/JavaScript
let now = new Date();
console.log(now.toDateString());
console.log(Math.random());
console.log(Math.abs(-45));
console.log(person2.firstName.charAt(2));
let num = 234.455654645;
console.log(num.toFixed(2));
console.log(parseFloat(num.toString()));

// Document Object Model
const header = document.getElementById('message');
header.style.color = 'green';
header.style.fontWeight = '800';

// detecting Button Clicks
const button = document.getElementById('see-review');
button.addEventListener('click', function(){
    console.log('click');
});

// showing and hiding DOM elements
const button2 = document.getElementById('see-review');

button2.addEventListener('click', function(){   // this function can be used as a toggle
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button2.textContent = 'CLOSE REVIEW';
    }
    else{
        review.classList.add('d-none');
        button2.textContent = 'SEE REVIEW';
    }
});

// Arrays
let nums = []; // Create
let values = [1,2,3]; // Create and initialize
let numbers = Array.of(1,2,3); // initialize an array

const chars = ['a', 'b', 'c'];
console.log(chars);

//Accessing Array Items
console.log(chars[0]);
console.log(chars[2]);

// Manipulating Arrays
chars.push('d');  // add items to the end of an array
console.log(chars);
chars.push('g','hgj', 'feew');
console.log(chars);
chars.shift(); // delete items from the beginning of an array
console.log(chars);
chars.pop(); // delete item from the end of an array
console.log(chars);
chars.unshift('hello', 'world'); // add items to the beginning of an array
console.log(chars);

//slice and splice
const newValues = chars.slice(2,6);
console.log(newValues);
chars.splice(1,3);
console.log(chars);
chars.splice(2, 0 , 'new');
console.log(chars);

// Array Searching and Looping
const charset = ['a', 'fe', 'ktir', 'e'];
console.log(charset.indexOf('g')); // indexOf
const set = charset.filter(function(item){   // filter
    return item > 'b';
});
console.log(set);

const found = charset.find(function(item){   // filter
    return item.length > 1;
});
console.log(found);

charset.forEach(function(item){   // filter
    console.log(item);
});

// Arrays in the DOM
const containers = document.getElementsByClassName('container');
//containers[2].classList.add('d-none');
console.log(containers);