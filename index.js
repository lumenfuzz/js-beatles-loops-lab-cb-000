function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return newArray
}

function johnLennonFacts(array) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray[i] = `${array[i]}!!!`
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  for (var i = 0; i < n; i++) {
    newArray[i] = `I love the Beatles!`
  }
  return newArray
}
