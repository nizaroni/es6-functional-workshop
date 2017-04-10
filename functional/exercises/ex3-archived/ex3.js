function mult (x, y, ...remainingNumbers) {
  if (remainingNumbers.length === 0) {
    return x * y
  }
  return mult(x * y, ...remainingNumbers)
}

console.log( mult(3,4,5) )   // 60

console.log( mult(3,4,5,6) ) // 360
