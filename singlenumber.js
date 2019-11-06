const input = [4,1,2,1,2];

check(input);

function check(ar) {
    const map = {};

    for (let i = 0; i < ar.length; i ++) {
        const val = ar[i];
        if (!map[val]) {
            map[val] = val;
        } else {
            delete map[val];
        }
    }
    console.log(map);
}