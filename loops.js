
function whileLoop(n){
  let countdown = n;
  while(countdown>0){
    console.log(countdown--);
  }
  return "done"
}

function forLoop(array){
  for(let i=1; i<25; i++){
    if (i===1){
      return "I am 1 strange loops."
    } else { "I am ${i} strange loops."
    }
  }
}