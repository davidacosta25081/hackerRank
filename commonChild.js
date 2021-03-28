A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. 
Letters cannot be rearranged. 
Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both?

Example :
s1 = 'ABCD'
s2 = 'ABDC'

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

function commonChild(s1,s2) {
  length = s1.length;
  let matrix = [Array(length + 1).fill(0)].map(() => Array(length + 1))
  for (let i = 0; i<length; i++) {
    for (let j = 0; j<length; j++){
      if (s1[i] === s2) {
        matrix[i+1][j+1] = matrix[i][j] + 1
      }else{
        matrix[i+1][j+1] = Math.max(matrix[i][j-1], matrix[i-1[j]]);
      }
    }
  }
  return matrix[length][length];
    
}