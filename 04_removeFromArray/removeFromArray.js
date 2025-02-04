const removeFromArray = function(array, ...numbers) {
    for(const number of numbers){
        let index = array.indexOf(number)
        while (index > -1){
            array.splice(index,1)
            index = array.indexOf(number)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
