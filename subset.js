const input = [1, 2, 3];

let subsets = [];
generateSubsets(0, input, [], subsets);
console.log('subsets', subsets);

function generateSubsets(index, input, curr, subsets) {
    subsets = subsets.concat(JSON.parse(JSON.stringify(curr)));
    for (let i = index; i < input.length; i++) {
        curr.push(input[i]);
        generateSubsets(i + 1, input, curr, subsets);
        curr = curr.slice(curr.length - 1);
    }
}