function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

function compose(...funcs) {
  funcs.reverse()

  return function composition(arg) {
    for (func of funcs) {
      arg = func(arg)
    }
    return arg
  }
}

function pipe(...funcs) {
  return function pipeline(arg) {
    for (func of funcs) {
      arg = func(arg)
    }
    return arg
  }
}

var f = compose(decrement,double,increment,half);
var p = pipe(half,increment,double,decrement);

console.log( f(3) === 4 );
// true

console.log( f(3) === p(3) );
// true
