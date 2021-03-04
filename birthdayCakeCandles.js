function birthdayCakeCandles(ar) {
  let count = 0;
  let max = 0;
  ar.forEach(el =>  {
    if (el>max) {
      max = el;
      count = 1;
    }
    else { (el == max) 
      count += 1;
    }
    
  })
return count;
}  




console.log(birthdayCakeCandles([1,4,4,1]));



    
