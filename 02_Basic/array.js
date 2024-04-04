///Array

// const myArr=[0,1,2,3,4,5,6,7];

// const myHero=["SaktiMan",'Junior ji'];

// const newArr=new Array(1,2,3,4);
// console.log(newArr);

// //Array method
// newArr.push(6);
// console.log(newArr);
// console.log(newArr.pop());

const marvel_heros=["Thor","IronMan","Spiderman"];
const dc_heros=["superman","flash","batman"];
//marvel_heros.push(dc_heros);
//const allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);
// console.log(marvel_heros[3][1]);
const allNewHero=[...marvel_heros,...dc_heros]
// console.log(allNewHero);
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray=anotherArray.flat(Infinity)
console.log(realAnotherArray);
