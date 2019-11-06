
var input = 16;

check (1);

function check(input) {
    let total = 1;
    let isPower = false;
    let done = false;

    if (input === 1) {
        isPower = true;
        done = true;
    }
    while (!done) {
        total = 2 * total;
        if (total === input) {
            done = true;
            isPower = true;
        } else if (total > input) {
            done = true;
            isPower = false;
        }
    }
    if (isPower) {
        console.log(input, 'is a power of two');
    } else {
        console.log(input, 'is NOT a power of two');
    }
   
}