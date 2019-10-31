/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 17,

Because nums[0] + nums[1] = 2 + 15 = 17,
return [0, 1].
*/


const ar = [2, 7, 11, 15];
const targetSum = 13;

/*
2 0
7 1
11 2
15 3    
*/
const map = {};
for (let i = 0; i < ar.length; i ++) {
    const key = ar[i];
    map[key] = i;
    const diff = targetSum - key;
    console.log(map[diff]);
    if (map[diff] !== undefined) {
        console.log(i, map[diff]);
        break;
    }
    
}
/*
const map = {};
for (let i = 0; i < ar.length; i ++) {
    const key = ar[i];
    map[key] = i;
}

for (let i = 0; i < ar.length; i ++) {
    const diff = targetSum - ar[i];
    if (diff + ar[i] === targetSum) {
        console.log(i, map[diff]);
        break;
    }
}
*/


/*
let currIndex, nextIndex;
let isMatchFound = false;
for (let i = 0; i < ar.length; i ++) {
    for (let j = i + 1; j < ar.length; j ++) {
        if (ar[i] + ar[j] === targetSum) {
            currIndex = i;
            nextIndex = j;
            isMatchFound = true;
            break;
        }
    }
    if (isMatchFound) {
        break;
    }
}
if (!isMatchFound) {
    console.log('no match found');
    return;
} 
console.log('indexes', currIndex, nextIndex);
*/
