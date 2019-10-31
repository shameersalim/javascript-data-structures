function test(haystack, needle) {
    const s = 'abc';
    const len = haystack.length;
    let i = 0; let j = 0;
    let matching = false;
    let matchLen = 0;
    let matchStart =  -1;
    while (j < needle.length && i < haystack.length) {
        const a = haystack[i];
        const b = needle[j];
        if (a !== b) {
            i ++;
            matchLen = 0;
            matchStart = -1;
        } else {
            matching = true;
            if (matchStart === -1) {
                matchStart = i;
            }
            j ++;i ++;
            matchLen ++;
        }
    }
    console.log(matchStart);
}


test('aaaaahello', 'lm');