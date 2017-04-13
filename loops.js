function forLoop(array){
  for(let i = 0; i<25; i++){
    if(i=1){
      "I am 1 strange loop."
    }
    else{
      "I am ${i} strange loops."
    }
  }
}

function whileLoop(number > 0){
  console.log(--number)
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
  --array.length
} while (array.length > 0 && maybeTrue())

return array
} 

