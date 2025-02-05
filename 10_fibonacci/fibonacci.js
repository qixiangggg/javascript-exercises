const fibonacci = function(number) {
    let ret;
    if (number < 0){
        return "OOPS";
    }
    if (number == 0){
        ret = 0;
    }
    else if (number == 1){
        ret = 1;
    }
    else if (number >= 2){
        num1 = 0
        num2 = 1
        for (let i = 2; i<=number;i++){
            ret = num1 + num2;
            temp = num2;
            num2 = ret;
            num1 = temp;
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = fibonacci;
