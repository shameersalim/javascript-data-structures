let input = [
    {
        start: 0,
        end: 30
    },
    {
        start: 5,
        end: 10
    },
    {
        start: 15,
        end: 20 
    }
];

function check(ar) {
    let startAr = [0, 5, 15];
    let endAr = [10, 20, 30];

    for (let i = 0; i < startAr.length - 1; i ++) {
        if (startAr[i+1] < endAr[i]) {
            return false;
        }
    }
    return true;    
}