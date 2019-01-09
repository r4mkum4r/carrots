function abc(cb) {
  setTimeout(function() {
    cb('121')
  }, 0)
}

var val

abc(function(num) {
  val = num
})

console.log(val)
