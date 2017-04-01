var numbers = {
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i += this.step) {
      yield i
    }
  },

  configure(
    {
      start = 0,
      end = 100,
      step = 1
    } = {}
  ) {
    this.start = start
    this.end = end
    this.step = step
  }
};

numbers.configure()
// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

numbers.configure({ start: 6, end: 30, step: 4 })
// should print 6..30 by 4s
for (let num of numbers) {
	console.log(num);
}
