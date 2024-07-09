/* 
? Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
*/

/* 
async function sleep(millis){ 

    function callBack(resolve,reject){
        setTimeout((resolve, millis))
    }
    return new Promise(callBack)
} 

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100

async function sleep(millis){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,millis)
    })
}
*/

/* async function sleep(millis){ 

    function callBack(resolve,reject){
        setTimeout((resolve, millis))
    }
    return new Promise(callBack)
}

async function hello(){
    await sleep(1000)
    return "Hello"
}  
  
async function helper(){
    const response =  hello()
    console.log(response);
}
  
helper()  */

/* 
? now question say It can resolve any value. so why not return a undefined, so don't return return any thing and execute a promise with await so it's give us undefined
*/
async function sleep(millis) {
     await new Promise((resolve,reject)=>{
     setTimeout(resolve,millis)
    }) 
}
 



