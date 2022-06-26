module.exports = function toReadable(number) {
    const arrowBetweeenTen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const arrowBetweenTwenty = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arrowBetweenHundred = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const stringNumber = String(number).split("");
    if (number < 10) {
        return arrowBetweeenTen[number];
    } else if (number >= 10 && number < 20) {
        return arrowBetweenTwenty[stringNumber[1]];
    } else if (number <= 99 && number % 10 === 0) {
        return arrowBetweenHundred[stringNumber[0] - 2];
    } else if (number <= 99) {
        return (
            arrowBetweenHundred[stringNumber[0] - 2] +
            " " +
            arrowBetweeenTen[stringNumber[1]]
        );
    } else if (number <= 999 && number % 100 === 0) {
        return arrowBetweeenTen[stringNumber[0]] + " hundred";
    } else if (number <= 999 && stringNumber[1] === "0") {
        return (
            arrowBetweeenTen[stringNumber[0]] +
            " hundred " +
            arrowBetweeenTen[stringNumber[2]]
        );
    } else if (number <= 999 && stringNumber[1] === "1") {
        return (
            arrowBetweeenTen[stringNumber[0]] +
            " hundred " +
            arrowBetweenTwenty[stringNumber[2]]
        );
    } else if (number <= 999 && number % 10 === 0) {
        return (
            arrowBetweeenTen[stringNumber[0]] +
            " hundred " +
            arrowBetweenHundred[stringNumber[1] - 2]
        );
    } else {
        return (
            arrowBetweeenTen[stringNumber[0]] +
            " hundred " +
            arrowBetweenHundred[stringNumber[1] - 2] +
            " " +
            arrowBetweeenTen[stringNumber[2]]
        );
    }
};
