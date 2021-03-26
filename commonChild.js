/*
These strings have two children with maximum length 3, ABC and ABD. 
They can be formed by eliminating either the D or C from both strings. Return 3.

Function Description :
Complete the commonChild function in the editor below.
commonChild has the following parameter(s):
string s1: a string
string s2: another string

Returns :
int: the length of the longest string which is a common child of the input strings

Input Format :
There are two lines, each with a string, s1 and s2.

Constraints

* 1 <= s1, s2 <= 5000
* All characters are upper case in the range ascii[A-Z].

*/

function commonChild(s1, s2) {

  let length = s1.length;
  let matrix = Array(length + 1).fill().map(()=> Array(length + 1))
  for (let i=0; i<=length; i++) {
    for (let j=0; j<=length; j++){
      if (matrix[i] === 0 ||  matrix[j] === 0){
        matrix[i][j] = 0;   
      }else if (s1[i-1] === s2[j-1]) {
        matrix[i][j] = matrix[i-1][j-1] + 1;
      }else {
        matrix[i][j] = Math.max(matrix[i][j-1] , matrix[i-1][j])
      } 
    }
  }
  return matrix[length][length];
}


s1 = 'ABCD'
s2 = 'AXB'

console.log(commonChild(s1,s2));