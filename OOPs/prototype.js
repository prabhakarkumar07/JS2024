//prototype
//to get true length
//let myName = "Prabhakar      ";
// console.log(myName.trim().length);


let myHero = ['thor', 'spiderman']
let str = "Prrabhaakf"

let heroPower = {
    thor: "hammer",
    spider: "sling"

    , getSpiderPower: function () {
        //   console.log(`spidey power is ${this.spider}`);
    }
}
Object.prototype.hitesh = function () {
    // console.log('hitesh is present in all obj');
}

Array.prototype.hayArray = function () {
    //console.log('hey arrray');
}
//heroPower.hayArray() false error
// heroPower.hitesh()
//myHero.hayArray() true
// str.hitesh()
const user = {
    name: "Chai",
    email: "lhlkasf@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssigmnet: 'JS Assigment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


//Modern synatax

Object.setPrototypeOf(TeachingSupport, Teacher)
//Object.setPrototypeOf(whome,whose)

let anotherUserName = "prabhakar         "
String.prototype.trueLength = function () {
    console.log(`${this}`);

    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
"Hitesh".trueLength()