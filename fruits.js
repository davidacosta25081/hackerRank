function countPairs (n, socksArray) {
  const socksByColor = socksArray.reduce((accumulator,sockColor) =>   {
    if (!accumulator[sockColor]) {
        accumulator[sockColor] = 0;
    }
  
accumulator[sockColor] = accumulator[sockColor] + 1;
return accumulator;
},{});


}

const n = 9;
const ar = [10,20,20,10,10,30,50,10,20];
console.log(countPairs(n,ar));