var str = 'loveleetcode';

check(str);

function check (str) {
    const map = {};
    let smallest = 10000000;
    for (let i = 0; i < str.length; i ++) {
        const c = str[i];
        if (map[c] === undefined) {
            map[c] = i;
        } else {
            map[c] = -1;
        }
    }

    for (const key in map) {
        const val = map[key];
        if (val === -1) {
            continue;
        }
        if (val < smallest) {
            smallest = val;
        }
    }
    console.log('Smallest', smallest);
}