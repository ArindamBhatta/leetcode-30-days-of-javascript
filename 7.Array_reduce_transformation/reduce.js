/*
const num = [1, 2, 3, 4, 5];
function fn(init, n) { // this function iterate whole array
  return init + n; 
}
console.log(num.reduce(fn, 0));

? function programming how reduce work
var reduce = function (num, fn, init) {
  return num.reduce(fn, init);
};

? fully imperative solution
var reduce = function (nums, fn, init) {
  let res = init;
  for (const n of nums) {
    res = fn(res, n);
  }
  return res;
};

var reduce = function (num, fn, init) {
  let res = init;
  num.forEach((n) => {
    res = fn(res, n);
  });
  return res;
}; */
