console.log('')
console.log('impure foo')
console.log('----------')

function foo(x) {
	y++;
	z = x * y;
}

var y = 5, z;

foo(20);
z;		// 120
console.log({ y, z })

foo(25);
z;		// 175
console.log({ y, z })
console.log('')


//---------------------------------------


console.log('pure foo')
console.log('--------')

function pureFoo(x, y) {
  y += 1
  return [y, x * y]
}

;[y, z] = pureFoo(20, 5)
console.log({ y, z })

;[y, z] = pureFoo(25, 6)
console.log({ y, z })
console.log('')


//---------------------------------------


console.log('wrapped foo')
console.log('-----------')

function wrappedFoo(x, y) {
  var z
  foo(x)
  return [y, z]

  function foo(x) {
    y++
    z = x * y
  }
}

;[y, z] = wrappedFoo(20, 5)
console.log({ y, z })

;[y, z] = wrappedFoo(25, 6)
console.log({ y, z })
console.log('')


//---------------------------------------


console.log('reset foo')
console.log('---------')

function resetFoo(xArg, yArg) {
  var [oldY, oldZ] = [y, z]
  y = yArg
  foo(xArg)
  var [newY, newZ] = [y, z]
  ;[y, z] = [oldY, oldZ]
  return [newY, newZ]
}

;[y, z] = resetFoo(20, 5)
console.log({ y, z })

;[y, z] = resetFoo(25, 6)
console.log({ y, z })
console.log('')
