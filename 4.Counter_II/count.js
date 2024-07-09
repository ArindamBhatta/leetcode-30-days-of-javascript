/*
function createCounter(init) {
  const initialValue = init;
  return {
    increment: function (init) { //! closer is doesn't happening there (init)
      init++;
      return init;
    },
    decrement: function (init) {
      init--;
      return init;
    },
    reset: function () {
      return initialValue;
    },
  };
}
*/

function createCounter(init) {
  let initialValue = init;
  return {
    increment: function () {
      initialValue++;
      return initialValue;
    },
    decrement: function () {
      initialValue--;
      return initialValue;
    },
    reset: function () {
      initialValue = init;
      return initialValue;
    },
  };
}
const counter = createCounter(5);
console.log(counter.increment()); //6
console.log(counter.reset()); //5
console.log(counter.decrement());
