// 3 + 3 + 1 + 3
// minimum of maximum height of bars on both the sides minus its own height.

function findWater(ar) {
    let leftAr = [];
    let rightAr = [];
    let total = 0;

    leftAr[0] = ar[0];
    rightAr[ar.length - 1] = ar[ar.length - 1];
    for (let i = 1; i < ar.length; i++) {
        leftAr[i] = Math.max(leftAr[i - 1], ar[i]);
    }

    for (let i = ar.length - 2; i >= 0; i--) {
        rightAr[i] = Math.max(rightAr[i + 1], ar[i]);
    }

    for (let i = 0; i < ar.length; i++) {
        total = total + Math.min(leftAr[i], rightAr[i]) - ar[i];
    }

    console.log('Total is', total);

}

function findWater1(ar) {
    let total = 0;
    let maxLeft = 0;
    let maxRight = 0;
    for (let i = 1; i < ar.length; i++) {
        const val = ar[i];
        let left = ar[i];
        for (let j = 0; j < i; j++) {
            left = Math.max(left, ar[j]);
        }

        let right = ar[i];
        for (let j = i + 1; j < ar.length; j++) {
            right = Math.max(right, ar[j]);
        }

        total = total + (Math.min(left, right) - val);

    }
    console.log('Total is', total);
}

const ar = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
total = findWater(ar);
