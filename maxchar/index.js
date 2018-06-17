// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//counting numbers of charac
function maxChar(str) {
  //palabra = str.split('');
  charMap = {};
  max = 0;


//normal loop
  for (let char of str)
  {
    //Si ya existe, se incrementa
    if(charMap[char]){
      charMap[char] ++;
    }

    else{
      //en caso de que no exista, es 1 maximo
      charMap[char] = 1;
    }
  }

//loop to iterate objects
  for (let char in charMap){

    if (charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }

  //Ya tenemos los valores
  console.log(charMap);
  console.log(maxChar)
  return maxChar

}

module.exports = maxChar;
