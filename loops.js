/* FOR Loop...

for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}

for (var i = 1; i < 100; i++) {
  console.log( "Hello World the " + i + " time" )
}

End... */

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push("I am ${i} strange loops.")
    }
  }
  return array
}

/* WHILE Loop...

while ([condition]) {
  [loopBody]
}

End.. */

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
    return "done"
}

/* Do-WHILE...

do {
  [loopBody]
} while ([condition])

End... */

function doWhileLoop(array) {
  do {
    array.pop()
  } while(array.length > 0 && maybeTrue())

  return array
}
