/*
! Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i).
? answer: -
we have a integer array [] and
a mapping function()
we just want to return new array with transform applied.
* fn(arr[i], i)
1st argument is the array and 2nd one is index function needs two arguments

! if we use map() function
var map = function(arr,fn){
    return arr.map(fn) //? apply fn() function to each element of the arr object 
}
map() is a function that called exactly like fn(arr[i], i).but map except a function as a parameter which is a function it apply that function to each element  in the array.

function(arr[i],i) reason these two parameters are passed all the information of each element in the array

map is a concept of functional programming of course we can solve this problem with a loop.
functional programming is little bit different from procedural programming. javascript support both of these. functional programming have no state; not having any variable 
so we can do that procedural programming language where we needs state  and variable

? for(const n of arr){ //n = value

? for(const n in arr){ //n = index

! solution 1: - how to go
var map = function(arr, fn){
        const res = [] //?  we can't reassign result but we can modify. push() 
    for (const i in arr){ //* i is index of array so we needs to write different way because for in loop work in object
        res.push(fn(arr[i], i)); //? this function do it's job behind the seen
    }
    return res;
}
! but we get a wrong answer there because
    var map = function(arr, fn){
        const res = [] 

    ?    {
    ?        "one": 7'
    ?        "hello" :"world" //key is string 
    ?    }

    for (const i in arr){ // i is string there
        res.push(fn(arr[i], Number(i))); //! in typescript this would be compile time error not run time error
    }
    return res;
}
! Strategy  design pattern
passing a function into other function actually is a example of the Strategy  design pattern. it allows us to argument behavior of an object or a class usually this is tell about when we tacking about OOP but it's also apply function programming and also Procedural  programming flexibility 

so, what we did in this code we give ourself the flexibility to pass in a function(fn) in argument that function may be double every value in the array we can change our mind for this function letter.

that map function is do; also this strategy design pattern happens to be an instance of open close principal where this code is close to change but it's open for extension we can extend what this can do just by passing in a different function.

var map = function(arr, fn) {
    const res = new Array(arr.length);
    for(const i in arr){
       res[i] = fn(arr[i], Number(i));
    }
    return res
};
*/
function map(arr, fn) {
  const res = new Array(arr.length);
  console.log(res);
  for (const i in arr) {
    res[i] = fn(arr[i], Number(i));
  }
  return res;
}
