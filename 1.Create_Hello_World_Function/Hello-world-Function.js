/* 
! Write a function createHelloWorld. It should return a new function that always returns "Hello World".

? Topic is closer 

const createHelloWorld = function () {
  return function (...args) {}; //rest operator
};

function rest(...args){
    console.log(args[0] + args[1]);
}

? Use I I F E

*/
function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}

createHelloWorld();
