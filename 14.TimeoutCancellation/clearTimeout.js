/* 
?  Given a function fn, and a array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn, After a delay of cancelTimeMs, the return cancel function cancelFn will be invoked.
setTimeout(cancelFn, cancelTimeMs)
? Initially, the execution of that function fn should be delay by t milliseconds.

if, before the delay of t milliseconds, the function cancelFn is invoked then its it should cancel the delayed execution of fn. and return empty {}  

setTimeout(callBack, delay)

cancelTimeout: - can cancel a timeout before it triggers. so setTimeout needs to store in a variable

const timeoutId = setTimeout(function(){
    console.log("Hello world");
},3000) 

clearTimeout(timeoutId)

? const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

const fn = (x) => x * 5;
const args = [2];
const t = 20;

const cancelFn = cancellable(fn, args, t);

?Schedule the cancellation after cancelTimeMs milliseconds
setTimeout(cancelFn, 50);

*/

var cancellable = function(fn, args, t) {

  const exeTimer = setTimeout(()=>{
    fn(...args)
  },t);

  const cancelFn = function(){
    clearTimeout(exeTimer)
};
  return cancelFn
};









