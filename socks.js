function countPairs(n,socksArray) {
  let totalPairs = 0;
  const socksHash = {};

  socksArray.forEach((sockColor) =>  {
    if (!socksHash[sockColor]) {
      socksHash[sockColor] = 1;
      return;
    }  
    totalPairs++;
    delete socksHash[sockColor]
  });
  return totalPairs;
}


const n = 9;
const arr = [10,10,20,20,6,6,6,7,7,3,6,11,11];
console.log(countPairs(n,arr))

