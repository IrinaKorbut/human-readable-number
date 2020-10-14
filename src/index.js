let NUMBER_DICTIONARY = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};
module.exports = function toReadable(number) {
    let arr = [];
    let result = "";
    let i = 0;
    if (number > 99) {
        result = `${NUMBER_DICTIONARY[Math.floor(number / 100)]} hundred `;
    }
    if (number % 100) {
        number %= 100;
        if (number < 20) {
            result += `${NUMBER_DICTIONARY[number]}`;
        } else {
            result += `${NUMBER_DICTIONARY[Math.floor(number / 10) * 10]} `;
        }
    }
    if ((number > 19 && number % 10) || number == 0) {
        number %= 10;
        result += `${NUMBER_DICTIONARY[number]}`;
    }
    return result.trim();
};
