// let myDate=new Date()

//console.log(myDate.toLocaleDateString());//4/4/2024
//console.log(myDate.toString());//Thu Apr 04 2024 18:48:10 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.getDate());//4
// console.log(myDate.toDateString());//Thu Apr 04 2024

// let myTimeStamp=Date.now();
// console.log(Math.floor(myTimeStamp/1000));

let newDate=new Date();
console.log(newDate.getFullYear());
console.log(newDate.getDay());

const date=newDate.toLocaleString('en-IN',{
    weekday:"long",
});
console.log(date);