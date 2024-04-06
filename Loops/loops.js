//For loop
// let array=[1,2,3,4,5,6]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

///while+++++++++
// let index =0;
// while (index<=300) {
//     console.log('value of index is',index);
//     index+=10
    
// }

//do while
//  let score=11;
// do {
//     console.log(`score is ${score}`);
//     score++;
// } while (score<10);

//loop on array

let arr=[1,2,3,4,5,6];
//for of Loop

// for( let val of arr)
// {
//     console.log(val);
// }
// for in loop

// const person = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
// };

// for (const key in person) {
//     if (Object.hasOwnProperty.call(person, key)) {
//         const value = person[key];
//         console.log(`Key: ${key}, Value: ${value}`);
//     }
// }


//Map

// const map= new Map();
 //store unique value
// map.set('IN',"Indeia")
// map.set('USA',"United State of America")
// //console.log(map);
// for(const [key,value] of map)
// {
//     console.log(key,":",value);
// }

// const programming=['js','rb','py','java'];
// for (const key in programming)
// {
//     console.log(programming[key]);
// }

//forEach
//const coding=["js","c++","python","java"];

// coding.forEach( function (item){
//     console.log(item);
// } )


//arrow
//coding.forEach((item)=>{console.log(item);})

// function printMe(item){
//     console.log(item);
// }
//coding.forEach(printMe);
// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);
// })

// const myCodind=[
//     {
//         languageName:"Javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName:"Java ",
//         languageFileName:"java"
//     },
//     {
//         languageName:"Python",
//         languageFileName:"py"
//     },
// ]
// myCodind.forEach((item)=>{
//     console.log(item.languageName);
//     console.log(item.languageFileName);
// })
// const coding=["js","c++","python","java"];

// const values=coding.forEach((item)=>{
//     console.log(item);

//     return item//undefined
// })

const myNums=[1,2,3,4,5,6,7,8,9,10];

//let newNums=myNums.filter((num)=>num>5)
// let newNums=myNums.filter((num)=>{
//     return num>=4;
// })
// console.log(newNums);//retrun array

//using forEach

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>=4)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// const books=[
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Science Fiction', publish: 1995, edition: 2008 },
//     { title: 'Book Three', genre: 'Mystery', publish: 2000, edition: 2010 },  
//     { title: 'Book Four', genre: 'Fantasy', publish: 1985, edition: 2002 },
//     { title: 'Book Five', genre: 'Fiction', publish: 2012, edition: 2015 }, 
//     { title: 'Book Six', genre: 'Thriller', publish: 2008, edition: 2013 }, 
//     { title: 'Book Seven', genre: 'Historical Fiction', publish: 1999, edition: 2005 } ,
//     { title: 'Book Eight', genre: 'Biography', publish: 1976, edition: 1989 }, 
//     { title: 'Book Nine', genre: 'Self-Help', publish: 2010, edition: 2018 }, 
//     { title: 'Book Ten', genre: 'Horror', publish: 1988, edition: 1999 },
// ];

// let userBooks=books.filter((book)=>book.genre==="Fiction");
// userBooks=books.filter((book)=> { return book.publish>=1981 && book.genre==="Fiction"});
// console.log(userBooks);

// map
const myNumbers=[1,2,3,4,5,6,7,8,9,10];
// const mynewNums=myNumbers.map((num)=> num+10)
// console.log(mynewNums);
//
// const newNums=myNumbers.map((num)=>num*10)
//                         .map((num)=>num+1)
//                         .filter((num)=>num>40)  ;
//  console.log(newNums);

//Reduce

//const total=myNumbers.reduce((accu,curr)=>accu+curr,0);
const total=myNumbers.reduce((accu,curr)=>{
    console.log(`acc:${accu} + cuur:${curr}`);
    return accu+curr;
},0);



//console.log(total);










