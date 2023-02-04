'use strict';

const productId = 1234;

console.log(productId);

let myName = 'Pat';

console.log(typeof productId);

let person = {
    firstName: 'John',
    lastName: 'Adams'
};

showMessage(person.firstName + ' ' + person.lastName)

let price = `Hello ${myName}`;
showMessage(price.toUpperCase());

console.log(price);
console.log(price.substring(3));