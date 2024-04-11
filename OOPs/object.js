// function multiplyBy5(num) {

//     return num * 5;
// }
// multiplyBy5.power = 2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createuser(username, score) {
    this.username = username,
        this.score = score
}
createuser.prototype.increment = function () {
    this.score++
}
createuser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new createuser("chai", 25);
const tea = new createuser("tea", 250);

console.log(chai);
console.log(tea);

chai.printMe()
chai.increment()