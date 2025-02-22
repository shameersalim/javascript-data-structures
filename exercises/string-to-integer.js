/*
Example 1:

Input: "42"
Output: 42
Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:

Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
Example 4:

Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:

Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
*/
const map = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '0': 0,
    '-': '-'
}
const input = '-91283472332';
let out = 0;
const min = Math.pow(2, 31) * (-1);
const max = Math.pow(2, 31) - 1;

let str = '';
for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === ' ') {
        continue;
    }
    const val = map[char];
    if (!val) {
        break;
    }
    str += char;
}

if (str === '') {
    out = 0;
} else {
    out = parseInt(str);
}

if (out < min) {
    out = min;
} else if (out > max) {
    out = max;
}

console.log('Out is ', out);


