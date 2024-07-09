function createCounter(init) {
  function Counter(init) {
    this.init = init;
    this.count = init;
  }

  Counter.prototype.increment = function () {
    return ++this.count;
  };

  Counter.prototype.decrement = function () {
    return --this.count;
  };

  Counter.prototype.reset = function () {
    this.count = this.init;
    return this.count;
  };

  return new Counter(init);
}

// Example usage:
const counterObj = createCounter(0);
console.log(counterObj.increment()); // Output: 1
console.log(counterObj.decrement()); // Output: 0
console.log(counterObj.reset()); // Output: 0
