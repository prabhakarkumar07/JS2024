// // promise 1
// //creating promises
// const promiseOne = new Promise(function (resolve, reject) {
//     //Do async task
//     //Db calls,cryptography,network
//     setTimeout(function () {
//         console.log('Asyn task is complete');
//         resolve();
//     }, 1000)
// });
// promiseOne.then(
//     function () {
//         console.log("Promise consumed");
//     }
// )

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Asunc task 2');
//         resolve();
//     }, 1000)
// }).then(function () {
//     console.log("Asyn task2 resolved");
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ userName: "Chai", email: "Prabhakar@gmail.com" })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user);
// })

// const promiseFive = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ userName: "Chai", email: "Prabhakar@gmail.com" })
//         } else {
//             reject('Error:js Went worng')
//         }

//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (e) {
//         console.log(e);
//     }
// }
// consumePromiseFive()

// async function getAllUser() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         console.log(data);
//     } catch (e) {
//         console.log("E", e);
//     }
// }
// getAllUser();


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => console.log(e))