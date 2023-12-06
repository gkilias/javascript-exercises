const repeatString = function(string, numberOfReps) {
    
    let i = 1

    let result = ""

    if(numberOfReps < 0){
        result = "ERROR"
        return result
    }

    while(i <= numberOfReps){

        result = result + string

        i++
    }

    return result

};

// Do not edit below this line
module.exports = repeatString;
