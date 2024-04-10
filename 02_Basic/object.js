//singleton Object.create();
//  const mysym=Symbol("key1")
// const jsIsUser={
// name:"Prabhakar",
// [mysym]:"keyname1",
// "full name":"Prabhakar kumar",
// age:23,
// location:"bangalore",
// email:"prabhakarkumar@gmail.com",
// isLoggedIn:false,
// lastLoggedin:["Moday","Saturday"]
// }
// console.log(jsIsUser.email);
// console.log(jsIsUser["email"]);
// console.log(jsIsUser["full name"]);
// console.log(jsIsUser[mysym]);
// jsIsUser.email="prabhakar@google.com"
// Object.freeze(jsIsUser);//make it imutable

// jsIsUser.greetings=function()
// {
//     console.log(`Hi js user ${this["full name"]}!`);
// }
// console.log(jsIsUser.greetings());
// jsIsUser.newGreetings=function()
// {
//     console.log(`${this.greetings}`);
// }
// console.log(jsIsUser.newGreetings());
//singleton object

//const tinderuser=new Object()
// const tinderuser = {}
// tinderuser.id = "123abc";
// tinderuser.name = "Samay"
// tinderuser.isLoggedIn = true;
// console.log(tinderuser);


// const regularuser={
//     email:"prabhakarkumar@gmail.com",
//     fullName:{
//         firstName:"Prabhakar",
//         lastName:"Kumar"
//     }


// }
//console.log(regularuser.fullName.lastName);
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
//concate obj
// const obj3={...obj1,...obj2}
// const obj3=Object.assign({},obj1,obj2)

// const users=[{
//  id:1,
//  email:"sfgdf@.com"   
// }]

// console.log(Object.keys(tinderuser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderuser));//[ '123abc', 'Samay', true ]
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


//obje destructor
// const course={
//     courseName:"Js",
//     price:999,
//     instructor:"Hitesh"
// }
// const {courseName,price,instructor:sdf}=course;

// console.log(sdf);

//Api:Application protocol interface
//json
// {
//     "name":"Prabhakar",
//     "cousreName":"Js In Hindi"
//     "price":0,
// }

























