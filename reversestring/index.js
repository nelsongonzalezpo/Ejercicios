// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//Primera solucion


// function reverse(str)
// {
//
//   const arreglo = str.split('');
//   arreglo.reverse();
//   return arreglo.join('');
//
// }

//Segunda solucion

//Recomendacion, hacerlo con la segunda funcion

function reverse(str){

  let reversed = '';

  for(let letra of str){
    reversed = letra + reversed;
  }

   return reversed;

}

//Tercera Solucion

// function reverse(str){
//
// reduce single string value
//  Esta funcion esta hecha con funciones de flecha
//
// return str.split('').reduce((reversed, character) => {
//  return character + reversed;
// }, '');
//
//
// }



 module.exports = reverse;





// var palabra = str.split('');
// for(int i = 0; i = palabra.length(); i ++){
//
//   var nuevaPalabra += palabra;
//
// }
//
// return nuevaPalabra.reverse();



// const arr = str.split('');
// //console.log(arr)
//
// arr.reverse();
// return arr.join('');
