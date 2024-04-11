//Obejct literal

// const user = {
//     userName: "Prabhakar",
//     loginCount: 8,
//     siggnedIn: true,

//     getUserDetails: function () {
//         //console.log("Got User Details from Db");
//         //console.log(`Username:${this.userName}`);
//         // console.log(this);
//     }
// }

// console.log(user.userName);
// //console.log(user.getUserDetails());
// console.log(this);

//Construction function

// const promisOne = new Promise();
// const date = new Date();//new to create new instance called constructor


function User(userName, loginCount, isLogedIn) {
    this.userName = userName,
        this.loginCount = loginCount,
        this.isLogedIn = isLogedIn
    this.greeting = function () {
        console.log(`welcome ${this.userName}`);
    }

    //return this; implicitly define {instanceof }
}
const userOne = new User("Prabhakar", 4, true)
const userTwo = new User("Chai aur code", 5, false)
console.log(userOne.constructor);
//console.log(userTwo);