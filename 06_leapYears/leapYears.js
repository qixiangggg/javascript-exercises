const leapYears = function(year) {
    const isYearDivisableByFour = year % 4 ==0;
    const isCentury = year % 100 == 0;
    const isYearDivisablebyFourHundred = year % 400 == 0;

    if (isYearDivisableByFour && (!isCentury || isYearDivisablebyFourHundred)){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
