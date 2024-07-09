/* 
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
};

function createCounter(init: number): Counter {
    let currentValue = init;
    return{
        increment: function(){
            currentValue++
            return currentValue
        },
       decrement: function(){
            currentValue--
            return currentValue
       },
       reset: function(){
            currentValue = init
            return currentValue
        }
    }
    
};
*/
class Counter {
  private count: number;
  private init: number;

  constructor(init: number) {
    this.init = init;
    this.count = init;
  }

  public increment(): number {
    return ++this.count;
  }

  public decrement(): number {
    return --this.count;
  }

  public reset(): number {
    this.count = this.init;
    return this.count;
  }
}

function createCounter(init: number): {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
} {
  const counter = new Counter(init);
  return {
    increment: () => counter.increment(),
    decrement: () => counter.decrement(),
    reset: () => counter.reset(),
  };
}
