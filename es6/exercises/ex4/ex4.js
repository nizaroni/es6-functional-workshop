function upper(strings,...values) {
  var str = ''

  for (let i = 0; i < strings.length; i += 1) {
    if (i > 0) {
      str += values[i-1].toString().toUpperCase()
    }
    str += strings[i]
  }

  return str
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
  upper
	`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
