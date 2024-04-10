// function to return true if integer is poer of two



function isPowerOfTwo(num) {

    let op = false;
    for (let i = 1; i < num; i++) {
        if (2 ** i === num) {
            op = true;
        }
    }
    return op;
    // if (num < 1) {
    //     return false;
    // }
    // return (num & (num - 1)) === 0;
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));