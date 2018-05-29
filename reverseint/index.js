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
  //volti = false;
  const nuevo = n.toString().split('').reverse().join('');

   if (n < 0)
   {
     return parseInt(nuevo) * -1;
   }

   return parseInt(nuevo);


}

module.exports = reverseInt;
