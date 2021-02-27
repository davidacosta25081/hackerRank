const  euros = [20.5, 30.4, 40.29, 30.6]


const doble = euros.reduce((total,amount) => {
  total.push(amount * 2);
  return total;    
}, [])


console.log(doble);

