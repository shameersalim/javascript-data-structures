/*
Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
*/


function test(input, bannedAr) {
    const wordMap = {};
    const bannMap = {};
    for (const vo of bannedAr) {
        bannMap[vo] = vo;
    }

    let word = '';
    let maxWordKey = '';
    let maxWordCount = 0;
    for (let i = 0; i < input.length; i ++) {
        const c = input[i];
        
        if (c !== ' ') {
            word += c;
        } else {
            if (bannMap[word] !== undefined) {
                word = '';
                continue;
            }
            maxWordKey = word;
            if (wordMap[word] === undefined) {
                wordMap[word] = 1;
            } else {
                wordMap[word] = wordMap[word] + 1;
            }
            word = '';
        }
    }

    console.log(wordMap);
}

test('bob hit a ball the hit ball flew far after it was hit', ['hit']);