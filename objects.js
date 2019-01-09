var obj = {}

obj.abc = 100
obj.def = 200
obj.fgh = 'asdas'
obj.foo = false
obj.bar = [1, 2, 3, 4]
obj.fn = function() {}

// var fn = function() {
//   console.log('got a pen')
// }

// fn()

// callbacks

// function getPen() {
//   var fn = function() {
//     console.log('got a pen')
//   }
//   // borrows from someone else
//   setTimeout(function() {
//     console.log('borrowed')
//     fn()
//     return 'pen'
//   }, 1000)
// }

function getPen(fnName, callbackFn) {
  // borrows from someone else
  console.log('borrowed')

  console.log(fnName + ' called')

  callbackFn(Math.round(Math.random() * 100)) // => callback('pen')

  console.log('returned')
}

var fetchCallback = function(value) {
  console.log('fetched ' + value)
}
var borrowCallback = function(value) {
  console.log('borrowed ' + value)
}
var getCallback = function(value) {
  console.log('get ' + value)
}

getPen('fetch', fetchCallback)
console.log('--------------------------------')
getPen('get', getCallback)
console.log('--------------------------------')
getPen('borrow', borrowCallback)
