/* CommonJS module */

// var generateName = require('sillyname');
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

/* ECMAScript Modeule */
/* import generateName from "sillyName";
var sillyName = generateName(); */

/* console.log(`My name is ${sillyName}.`); */


import superheroes from 'superheroes';
const name = superheroes.random();
console.log(`I am ${name}!`);
