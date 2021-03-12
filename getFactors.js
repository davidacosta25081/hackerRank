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

  const getCommonValues = (arr) => {
    const myObj = {};
    arr.forEach(subArr => {
      subArr.forEach(el => {
        if (myObj.hasOwnProperty(el)){
          myObj[el]++
        }
        else {
          myObj[el] = 1;
        }
      })
    })

  Object.keys(myObj).forEach(key => {
    if(myObj[key] != arr.length) {
      delete myObj[key]
    }
  })
  return Object.keys(myObj)
  }

  function getTotalX (a,b) {



    
  }



    
