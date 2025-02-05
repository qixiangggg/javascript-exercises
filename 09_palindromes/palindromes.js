const palindromes = function (string) {
    validWord = "abcdefghijklmnopqrstuvwxyz0123456789";
    cleanedWord = string.toLowerCase().split("").filter((letter)=>validWord.includes(letter)).join("");
    reverseWord = cleanedWord.split("").reverse().join("");
    return reverseWord === cleanedWord;
};

// Do not edit below this line
module.exports = palindromes;
