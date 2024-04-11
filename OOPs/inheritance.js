class User {
    constructor(username) {
        this.username = username

    }
    logME() {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email,
            this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("Chai", "chai@gmail.com", "123");
chai.addCourse()

const masalChai = new User("Masal Tea");
masalChai.logME()

console.log(chai instanceof User);
