function nyeChaos(q) {
  let bribed = 0;
  let chaotic = false;
  for(let i=0; i < q.length - 1; i++) {  
    if ((q[i] - (i+1)) === 1) {
      bribed++ 
    }else if((q[i]-(i+1)) === 2){  
      bribed += 2;
    }else if((q[i]-(i+1)) > 2){  
      chaotic = true;
    }
  }
  chaotic? console.log('Too chaotic') : console.log(bribed); 
}

let line = [1,3,2,5,4,6,7,8,10,9]
nyeChaos(line)



/* It’s New Year’s Day and everyone’s in line for the Wonderland rollercoaster ride! 
There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. 
Initial positions increment by 1 from 1 at the front of the line to at n the back.
Any person in the queue can bribe the person directly in front of them to swap positions. 
If two people swap positions, they still wear the same sticker denoting their original places in line. 
One person can bribe at most two others. For example, if n = 8 and person 5 bribes person 4
the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8.
*/