//write a function that takes a number as input and returns the sum of its digit

function sumOfDigit(num) {
    //     const newNum=Array.from(String(num),Number);
    //    return newNum.reduce((acc,curr)=>acc+curr,0);
    //without converting into array a
    let sum = 0;
    let temp = num;
    while (temp !== 0) {

        let rem = temp % 10;
        sum += rem
        temp = Math.floor(temp / 10);

    }
    return sum;

}
console.log(sumOfDigit(1234));//op=10
console.log(sumOfDigit(123456));//op=21