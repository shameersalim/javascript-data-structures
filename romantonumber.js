function test(num) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var str = '';

    for (key in roman) {
        const val = roman[key];
        if (num < val) {
            continue;
        }
        var q = Math.floor(num / val);
        var rem = num % val;
        num = rem;
        str += key.repeat(q);
    }
    console.log(str);
    return str;
}

test(58);


function romanToNumber(rom) {
    /**
     * M-CM-XC-IV
     * 1000 + 900 + 90 = 4
     */
    var roman = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };
    var num = 0;

    let i = 1;
    for (let i = 1; i <= rom.length; i++) {
        const curr = rom[i];
        const prev = rom[i - 1];
        if (prev === 'I' && (curr === 'V' || curr === 'X')) {
            num = num - 1;
        } else if (prev === 'X' && (curr === 'L' || curr === 'C')) {
            num = num - 10;
        } else if (prev === 'C' && (curr === 'D' || curr === 'M')) {
            num = num - 100;
        } else {
            num += roman[prev];
        }
    }
    console.log(num);
}

// romanToNumber('LVIII');
romanToNumber('MCMXCIV');