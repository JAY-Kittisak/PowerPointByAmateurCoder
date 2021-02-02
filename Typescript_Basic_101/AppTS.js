"use strict";
//Dynamic type vs Static type
exports.__esModule = true;
// 1. string --> 'hello', "5" , `true`
// 2. number --> 10, 8.75
// 3. boolean --> true / false
var str;
str = "10";
var sum = function (a, b) {
    return a + b;
};
var total = sum(5, 10);
console.log(total);
