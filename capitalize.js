function capitalize(string){
  let firstLetter;
  const array = string.split("");
  firstLetter = array[0];
  const capital = firstLetter.toUpperCase();
  let finalString = "";
  for(let i = 0; i < array.length; i++){
    if(i === 0){
      finalString += capital;
    }
    else {
      finalString += array[i];
    }
  }
  return finalString;
}

  module.exports = capitalize;
