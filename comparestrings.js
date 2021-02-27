function twoStrings(s1,s2) {
  const hashMap1 = {};
  let count = 0;
  for (let i = 0 ; i < s1.length; i++) {
    hashMap1[s1[i]] = true; 
  }
  for (i = 0 ; i < s2.length ; i ++) {
    if (hashMap1[s2[i]]){
      count ++;  
    }
  }  
    
  return count;

}

console.log(twoStrings('zamba', 'Xionistaaaz'));






