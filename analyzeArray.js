function analyzeArray(array){
    let average = 0;
    let minimum = array[0]; 
    let maximum = 0;
    //Calculating min, max, and avg
    for(let i = 0; i < array.length; i++){
        average += array[i];
        if(array[i] < minimum){
            minimum = array[i];
        }
        if(array[i] > maximum){
            maximum = array[i];
        }
    }
    average /= array.length;
    const arrayAnalysis = new Analysis(average, minimum, maximum, array.length);
    return arrayAnalysis;
}
class Analysis {
    constructor(average, minimum, maximum, length){
        this.avg = average;
        this.min = minimum;
        this.max = maximum;
        this.lth = length;
    }
}
module.exports = analyzeArray;