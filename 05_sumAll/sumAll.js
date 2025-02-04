const sumAll = function(start,end) {
    console.log(typeof start)
    if (start < 0 || end <0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR"
    }
    if (start > end){
        let temp = end;
        end = start;
        start = temp;
    }
    let ret = 0;
    for(let i=start; i<=end;i++){
        ret +=i;
        console.log(i)
    }
    return ret;
    
};
console.log(sumAll(2.5, 4))
// Do not edit below this line
module.exports = sumAll;
