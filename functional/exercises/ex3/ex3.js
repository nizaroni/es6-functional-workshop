function foo(a, b) {
  return function fooThang () {
    return a + b
  }
}

var x = foo(3,4);

console.log( x() );	// 7
console.log( x() );	// 7
