// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str)
{

nuevo = str.split("");
return nuevo.reverse().join("");

}
module.exports = reverse;



// const arr = str.split('');
// //console.log(arr)
//
// arr.reverse();
// return arr.join('');
