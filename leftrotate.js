function rotleft(arr,rotations){
  const rotatedArray = arr.concat();
  for (let i = 0 ; i < rotations ; i++) {
    let frontElement = rotatedArray.shift();
    rotatedArray.push(frontElement);
  }
  return rotatedArray;
} 

const n = 3;
const sampleArray = [1,2,3,4,5,6];
console.log(rotleft(sampleArray,3));


