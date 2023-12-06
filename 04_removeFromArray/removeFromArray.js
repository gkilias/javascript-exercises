const removeFromArray = function(input, ...args) {

    for(let i = args.length - 1; i >= 0; i--){

        for(let j = 0; j < input.length; j++){

            if(input[j] === args[i]){

                input.splice(j, 1)

            }
        }
    }

    return input

}
function removeFromArray(array, ...args){
    return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
