
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
//const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(discriptor);

const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true
    ,
    orderChai: function () {
        console.log('chai nahi bani');
    }
}
//const discriptor = Object.getOwnPropertyDescriptor(chai, "name")
//console.log(discriptor);
Object.defineProperty(chai, 'name', {
    // value: 'Ginger Chai',
    // writable: false,
    enumerable: true,

})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))
for (let [key, value] of Object.entries(chai)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }

}
