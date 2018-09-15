module.exports = function getZerosCount(number) {
  // your implementation
  var nulli=0;
//   nulli+=Math.floor(number/10)+Math.floor(number/10)+Math.floor(number/100)+Math.floor(number/1000)+Math.floor(number/10000)+Math.floor(number/100000)+
//   Math.floor(number/1000000)+Math.floor(number/10000000)+
// Math.floor(number/25)+Math.floor(number/250)+Math.floor(number/2500)+Math.floor(number/25000)+Math.floor(number/250000)+
//   Math.floor(number/2500000)+Math.floor(number/25000000);
for (let index = 1; index < number; index++) {
  if (Math.pow(5,index)<=number) {
    nulli+=Math.floor(number/Math.pow(5,index))
  } 
    else {
      break;
    }
}

  return nulli;
}
