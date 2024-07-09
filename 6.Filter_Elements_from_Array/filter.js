/* 
2634. Filter Elements from Array
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

? solution: -
we have a given array arr[], and a filtering function which return a new array with fewer or equal number of elements

fn = function greaterThan10(n) { return n > 10; } if pass then return true, or false
and then create a new array Output: [20,30]

? Functional Programming approach
var filter = function(arr, fn) { //?every array have a method 
    arr.filter((n, i) => {
        return n > 10;
    } )
};

? declarative programming
var filter = function(arr, fn) {
    return arr.filter((fn)
};

? imperative programming
where we explicitly write arr.filter((fn) function to our own state

const res = []
for(const n of arr){ //of give value
  if(fn(n , i)) //? apply filter we need if statement
}

const res = []
for(const i in arr){ 
  if(fn(arr[i] , Number(i))) { 
    res.push(arr[i])
  }
}
return res;
};

? it's work. but it's slower because res array we push number index every time time so approach is
var filter = function(arr, fn) {
     const filterArr = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            filterArr.push(arr[i])
        }
    }
    return filterArr
  }
*/
