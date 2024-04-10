//Write a function to calculate the sum of all element in an array

function sumOfSquare(arr) {
    const arrSum = arr.reduce((accc, curr) => accc + (curr ** 2), 0);
    return arrSum;
}



console.log(sumOfSquare([1, 2, 3]));//po=14