const reverseString = function(string) {
    new_string = string.split('');
    let ret = "";
    for(let i=string.length-1; i>=0;i--){
        ret += new_string[i];
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
