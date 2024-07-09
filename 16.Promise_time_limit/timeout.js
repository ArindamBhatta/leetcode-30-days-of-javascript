function fn(t){
    return new Promise(function(res){
        setTimeout(res,t) //we waiting 150 millisecond to resolve 
})
}
 const limited = timeLimit(fn,100); //return a new function which is store in limited variable. in fn argument whole function is pass and //? in this case it can only run for 100 millisecond. after storing the function reference then called with some value 150. but we limited for 100ms 
limited(150).catch(console.log) //call with 150. what does that mean well hear's the

/* 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}//? so we get the square value

1) When we actually call timeLimit(fn,100) then fn will whole function which work will encapsulated with 100 millisecond time 

*/

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        var timeLimit = function(fn, t) {
    
            return async function(...args) {
                return new Promise((resolve,reject)=>{
                setTimeout(() => reject("Time Limit Exceeded"),t) //we just pass this function and call setTimeout executed this function after t millisecond 
    //*return fn(...args)  in Promise land we don't care about return value
                resolve(fn(...args))
                })
            }
        }; 
    }
};
/* 
! How this code will be executed 
               
? 1) after returning the function it's called setTimeout function set the timeout not necessary executing function defination but then immidiately executing  resolve(fn(...args)) code. resolve is not a async functionit's just going to call resolve and complety end the promise eventhow   fn(...args)) function is not executing so we want to wait. so use then
*/

var timeLimit = function(fn, t) {
    return async function(...args) {
                return new Promise((resolve,reject)=>{
                const id = setTimeout(() => reject("Time Limit Exceeded"),t) 
                 fn(...args)
                 .then((result) => resolve(result))
                 .catch((error) => reject(error))
                 .finally(() => clearTimeout(id))
                })
        }; 
};

/*

*/

var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise(async(resolve,reject)=>{
            setTimeout(() => reject("Time Limit Exceeded"),t) 
                try {
                   const result =  await fn(...args)
                        resolve(result)
                } catch (error) {
                        reject(error)
                }
                    
            })
    }; 
};