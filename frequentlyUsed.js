let text = "Jill and Mike eat cheese cheese and drink a lot of wine and eat a caramel"
let exclude = ['and', 'cheese' , 'eat']

function frequent(text,exclude){
  let frequent = {}
  let words = text.split(' ');
  for(let word of words){
    if (!frequent[word] && !exclude.includes(word)){
      frequent[word] = 1 
    }else{
      frequent[word]++;    
    }
  
  }
  return frequent;
}

console.log(frequent(text,exclude))











