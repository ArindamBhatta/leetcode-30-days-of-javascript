/* 
? Given two Promise promise1 and promise2, return a new promise.
promise1 and promise2 will both resolve with a number. The return promise should resolve with the sum of the two number


var addTwoPromises = async function(promise1, promise2) {
    const a =  await promise1
    const b = await promise2
    return a + b
};
*/
var addTwoPromises = function(promise1, promise2) {
    return promise1.then(a => {
      return promise2.then(b => {
        return a + b;
      });
    });
  };
  
