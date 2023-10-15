function reverseString(string){
    const array = string.split("");
    let finalString = "";
    for(let i = array.length-1; i >= 0; i--){
      finalString += array[i];
    }
    return finalString;
  }
  module.exports = reverseString;