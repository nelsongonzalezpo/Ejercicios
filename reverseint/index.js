// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

//Primera Solucion

var nuevo = n.toString();
var otro =  nuevo.split('').reverse().join('');

if(n < 0){
  return parseInt(otro) * -1;
}

else{
  return parseInt(otro);
  
}}

module.exports = reverseInt;
