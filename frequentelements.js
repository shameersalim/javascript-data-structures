var input = [1,1,1,2,2,3];

var freq = 2;

check (input);

function check(ar) {
    const map = {};

    for (let i = 0; i < ar.length; i ++) {
        const val = ar[i];
        if (!map[val]) {
            map[val] = 1;
        } else {
            map[val] = map[val]  + 1;
        }
    }

    let res = [];
    for (const key in map) {
        res.push(key);
    }
    console.log(res);
}