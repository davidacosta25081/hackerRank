function compareTriplets(a,b) {

  let alicePoints = 0 , bobPoints = 0;
  for (let i = 0; i<3; i++){
    if (a[i] > b[i]) {
        alicePoints++;
    }
    else if (a[i] < b[i]){
        bobPoints++;
    }
  }

   return [alicePoints,bobPoints]   
}


let a = [3,100,200];
let b = [1000,23,43];

console.log(compareTriplets(a,b))