/* 
! Allow one function call

Given a function fn, return a new function that is identical to the original function except that it ensure fn is called at most one 
The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

The first time the returned the function is called, it should return the same result as fn.every subsequent time it is called, it should return undefined

var once = function(fn){

    return function(...args){
        
    }
}

let fn = (a,b,c) => (a+b+c)
let onceFn = once(fn) //* onceFn is a higher order function  once(fn)(1,2,3) then get return value
onceFn(1,2,3); //? output 1st time: - 6 so 
onceFn(2,3,6); //? returns undefined without calling fn
*/

var once = function(fn){
    let called = false //if child function call then it's became true

    return function(...args){ //rest operator access it like an array args[1]
//* if called then the function became undefined
        if(called){
            return undefined
        }
        called = true;
        return fn(...args)

}

}
