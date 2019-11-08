var ar = [[3,3],[5,-1],[-2,4]];
var k = 1;

bubblesort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
calc(ar);

function calc(ar) {
    const map = {};
    for (let i = 0; i < ar.length; i ++) {
        const vo = ar[i];
        var sqr = vo[0] * vo[0] + vo[1] * vo[1];
        map[i] = {
            '1': vo,
            '2': sqr
        }
    }
    bubblesort1(map);
}

function bubblesort1(ar) {
    var swap = false;
    var n = Object.keys(ar).length - 1;
    do {    
        swap = false;
        for (let i = 0; i < n; i ++) {
            if (ar[i]['2'] > ar[i+1]['2']) {
                var temp = ar[i];
                ar[i] = ar[i + 1];
                ar[i + 1] = temp;
                swap = true;
            }
        }
        n --;
    } while (swap);
    debugger;
}

function bubblesort(ar) {
    var swap = false;
    var n = ar.length - 1;
    do {    
        swap = false;
        for (let i = 0; i < n; i ++) {
            if (ar[i] > ar[i+1]) {
                var temp = ar[i];
                ar[i] = ar[i + 1];
                ar[i + 1] = temp;
                swap = true;
            }
        }
        n --;
    } while (swap);
}