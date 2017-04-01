// computed properties
var food = 'pizza'
var obj = {
  [food]: 'yes'
}

console.log(obj)


// default parameters
function doStuff (x = 1, y = x) {
  console.log(x, y)
}

doStuff()
doStuff(8)
doStuff('a', 'b')


// Object.assign
var settings = {
  sauce: 'marinara',
  crust: 'normal'
}
var toppings = {
  mushrooms: 2,
  bacon: 7
}
var pizza = Object.assign({}, settings, toppings)

console.log(pizza)
