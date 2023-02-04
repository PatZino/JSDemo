'use strict';

const productId = 1234;
console.log(productId);
let myName = 'Pat';
console.log(typeof productId);

//object
let person = {
    firstName: 'John',
    lastName: 'Adams'
};

let price = `Hello ${myName}`;
showMessage(price.toUpperCase());
console.log(price);
console.log(price.substring(3));

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