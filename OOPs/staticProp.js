class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }
    static createId() {/// static stop user to use this method
        return Math.floor(Math.random() * 1000)
    }
}
const prabhakar = new User("prabhakar")
console.log((prabhakar.createId()));

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
const iPhone = new Teacher("iphone", "Iphone@gmail.com")
iPhone.logMe()