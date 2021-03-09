function getFactors(number) {
  const factors = []
  for (let i = 0 ; i <=number ; i++) {
    if(number % i == 0){
      factors.push(i);    
    }
  }
  return factors;
} 

Array.prototype.includesAll = function(arr1) {
  return arr1.filter(el => this.includes(el)).length == arr1.length
                           
}


    
