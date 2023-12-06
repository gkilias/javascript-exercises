const sumAll = function(num1, num2) {

    if(num1 < 0 || 
       num2 < 0 ||
       typeof(num1) !== "number" ||
       typeof(num2) !== "number"){

        return "ERROR"
       }

    let resultSum = 0

    const range = [num1, num2]

    const arraySum = Array.from({length: (Math.max(...range) - Math.min(...range)) + 1}, (v,i) => Math.min(...range) + i)

    arraySum.forEach(num => resultSum += num)

    return resultSum
};

// Do not edit below this line
module.exports = sumAll;
