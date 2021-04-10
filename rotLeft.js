function rotLeft(a, d){
  while (d--) {
    const shifted = a.shift();
    a.push(shifted)
  }
  return a
}


/* It’s New Year’s Day and everyone’s in line for the Wonderland rollercoaster ride! 
There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. 
Initial positions increment by 1 from 1 at the front of the line to at n the back.
Any person in the queue can bribe the person directly in front of them to swap positions. 
If two people swap positions, they still wear the same sticker denoting their original places in line. 
One person can bribe at most two others. For example, if n = 8 and person 5 bribes person 4
the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8.
*/