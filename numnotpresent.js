/* 
Write a function:
function solution(A);
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
*/

function solution(A) {
    let x = 1;
    for (let i = 1; i <= 100000; i ++) {
      if (!A.includes(i))
        return i;
      
    }
 
}