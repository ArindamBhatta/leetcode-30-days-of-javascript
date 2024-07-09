/* 
! Return the length of argument passed 
Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3
? Three values were passed to the function so it should return 3.

* Question: -
    Write a function argumentLength thats return the count of the arguments passed to it.

? Rest parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
*/

var argumentsLength = function(...args) { //? args is [arg, arg, arg]
     
    return args.length
};