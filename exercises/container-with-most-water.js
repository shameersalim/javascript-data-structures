function small(a, b) {
    let res;
    if (a < b) {
        res = a;
    } else {
        res = b;
    }
    return res;
}

function large(a, b) {
    let res;
    if (a > b) {
        res = a;
    } else {
        res = b;
    }
    return res;
}

function test(input) {
    const len = input.length;
    let i = 0; let j = len - i - 1;

let loopEnd = false;
let maxArea = 0;
while (i < len && j > 0) {
    const left = input[i];
    const right = input[j];
    if (left === 222 && right === 55) {
        debugger;
    }
    let width = j - i;
    let height = small(left, right);
    const area = width * height;
    const k = i + 1;
    const l = j - 1;
    const next = input[k];
    const prev = input[l];
    const left1 = small(next, right);
    const right1 = small(left, prev);
    const width1 = j - i - 1;
    const area1 = left1 * width1;
    const area2 = right1 * width1;
    let lg, lg1;
    lg1 = large(area, area1);
    lg = large(lg1, area2);
    console.log(`left X right (${left}, ${right}), left1 X right (${left1}, ${right}), left X right1 (${left}, ${right1}) `);
    if (maxArea < lg) {
        maxArea = lg;
    }
    i ++;
    j --;
}
    console.log(maxArea);
}



let input = [1,8,6,222,555,4,8,3,7];
test(input);
//const input = [3, 9, 3, 4, 7, 2, 12, 6];
//test(input);