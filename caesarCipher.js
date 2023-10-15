function caesarCipher(string, shift){
    let finalString = [];
    const array = string.split("");
    const shiftedLetters = [];
    let shiftedLetter;
    //Shifting each letter and storing it in an array
    for(let i = 0; i < array.length; i++){
        shiftedLetter = array[i].charCodeAt() ;
        //Dealing with the letter z
        if((shiftedLetter === 90 || shiftedLetter === 122) && shift !== 0){
            shiftedLetter -= 26;
        }
        shiftedLetters.push(String.fromCharCode(shiftedLetter + shift));
    }
    //Putting shifted letters into a string
    for(let i = 0; i < shiftedLetters.length; i++){
        finalString += shiftedLetters[i];
    }
    return finalString;
}
module.exports = caesarCipher;