function rotLeft(a, d){
  while (d--) {
    const shifted = a.shift();
    a.push(shifted)
  }
  return a
}


