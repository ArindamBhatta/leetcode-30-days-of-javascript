/* 
! problem2 : -Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

? Answer: - Answer is lies on closer topic. argument n is accessible because of closure. child function can access parent function but parent cant access child function. 
in this scenario increment function can access argument n value because of lexical scoping and count function can access because of closer. 

function createCounter(n) {
  console.log("Value of parent scope is", n);
  return function increment() {
    console.log("Value of child scope is", n);
    return n++;
  };
}
const count = createCounter(10); //? Variable store only return statement such as int value
count();
count();
count();
*/

/* 
! if you pass argument parent to child you need nested execution context 
Step Into: Step Into is used for debugging the test steps line by line.


function createCounter(n) {
  console.log("Value of n is", n);
  function increment(n) {
    console.log("Inner n:", n);
    return ++n; //? we cant return to parent child can access parent value but parent can't access child
  }
  let add = increment(n);
  console.log(add);
}

createCounter(10);
*/

function createCounter(n) {
  console.log("Value of parent scope is", n);
  return function increment() {
    console.log("Value of child scope is", n);
    return n++;
  };
}
const count = createCounter(10);
console.log(typeof count);
console.log(count());
console.log(count());
