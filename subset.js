
var subsets = function (nums) {
    var sub = [
        []
    ];

    combine([], nums.slice(0), sub);

    return sub;
};

function combine(arr, nums, sub) {
    while (nums.length) {
        var data = nums[0];
        var copy = arr.slice(0);
        copy.push(data);
        sub.push(copy);
        nums.shift();
        combine(copy, nums.slice(0), sub);
    }
}


/**
 * [1,2,3]
 * 1 -> [1]
 * sub.push [1]
 * 
 * 1,2,3,4
 * 
 * 1
 * 2
 * 3
 * 4
 * 1,2
 * 2,3
 * 3,4
 * 1,3
 * 2,4
 * 1,4
 * 1,2,3
 * 2,3,4
 * 1,2,4
 * 1,3,4
 * 1,2,3,4
 */

subsets([1, 2, 3]);




/*
function generateSub(index, nums, curr, subsets) {
    subsets.push(curr.slice(0));
    for (let i = index; i < nums.length; i++) {
        curr.push(nums[i]);
        generateSub(i + 1, nums, curr, subsets);
        curr.pop();
    }
}
*/

function gen(index, arr, curr, sub) {
    sub.push(curr.slice(0));
    for (let i = index; i < arr.length; i ++) {
        curr.push(arr[i]);
        gen(i+1, arr, curr, sub);
        curr.pop();
    }
}
sub1 = [];
gen(0, [1,2,3], [], sub1);
debugger;
