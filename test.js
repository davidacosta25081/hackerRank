let text = "Jill and Mike eat cheese cheese and drink a lot of wine and eat a caramel"
let exclude = ['and', 'cheese' , 'eat']

function popularWords(text,exclude) {
  let mapeado = new Map();
  let separate = text.split(' ');
  for (let key of separate){
    if (!mapeado.has(key) && !exclude.includes(key)){
      mapeado.set(key,1)
    }else{
    mapeado.set(key,mapeado.get(key) + 1)
    }
  
  }
  console.log(mapeado); 
}


popularWords(text,exclude)