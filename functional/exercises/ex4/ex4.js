logResults(
  [ addTwoFuncs      , wrapNumber(42),  wrapNumber(9999) ],

  [ addFuncsLoop     , [ wrapNumber(42), wrapNumber(9999) ] ],
  [ addFuncsRecursion, [ wrapNumber(42), wrapNumber(9999) ] ],
  [ addFuncsListOps  , [ wrapNumber(42), wrapNumber(9999) ] ],

  [ addFuncsLoop     , [ wrapNumber(9), wrapNumber(90), wrapNumber(900), wrapNumber(9000) ] ],
  [ addFuncsRecursion, [ wrapNumber(9), wrapNumber(90), wrapNumber(900), wrapNumber(9000) ] ],
  [ addFuncsListOps  , [ wrapNumber(9), wrapNumber(90), wrapNumber(900), wrapNumber(9000) ] ]
)

// -------------------------------------

var numbers = [ 9,9,9,7,7,7,6,6,6,4,4,4,5,5,5,2,2,2 ]

console.log(numbers)
console.log(
  addFuncsListOps(
    numbers
      .reduce(
        function unique (uniqueList, number) {
          if (uniqueList.includes(number)) {
            return uniqueList
          }
          return [ ...uniqueList, number ]
        },
        []
      )
      .filter(function isEven (number) {
        return number % 2 === 0
      })
      .map(wrapNumber)
  )
)


// =============================================================================


function logResults (...operations) {
  const length = getMaxOpNameLength(operations)

  for (let [ func, ...args ] of operations) {
    const name = pad(func.name, length)
    console.log(name, '-->', func(...args))
  }
}

function getMaxOpNameLength (operations) {
  return operations
    .map(function getFunctionNameLength ([ func ]) {
      return func.name.length
    })
    .reduce(function max (a, b) {
      return Math.max(a, b)
    })
}

function pad (str, length) {
  if (str.length >= length) {
    return str
  }

  return ' '.repeat(length - str.length) + str
}

// -------------------------------------

function addFuncsLoop (funcs) {
  var [ accumulatedFunc, ...remainingFuncs ] = funcs

  for (func of remainingFuncs) {
    accumulatedFunc = wrapNumber(
      addTwoFuncs(accumulatedFunc, func)
    )
  }

  return accumulatedFunc()
}

function addFuncsRecursion ([ aFunc, bFunc, ...remainingFuncs ]) {
  const currentVal = addTwoFuncs(aFunc, bFunc)

  if (remainingFuncs.length === 0) {
    return currentVal
  }

  return addFuncsRecursion(
    [
      wrapNumber(currentVal),
      ...remainingFuncs
    ]
  )
}

function addFuncsListOps (funcs) {
  var resultFunc =
    funcs.reduce(function addThenWrap (accumulatedFunc, func) {
      return wrapNumber(
        addTwoFuncs(accumulatedFunc, func)
      )
    })
  return resultFunc()
}

// -------------------------------------

function addTwoFuncs (aFunc, bFunc) {
  return add( aFunc(), bFunc() )
}

function add (a, b) {
  return a + b
}

function wrapNumber (number) {
  return function getNumber () {
    return number
  }
}
