class User {
    constructor(email, password) {
        this.email = email,
            this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        return this._email = value
    }

    get password() { //getter setter allow what to return when call
        return `${this._password}hitesh`
    }

    set password(value) {
        this._password = value
    }

}
const prabhakar = new User("p@gmail.com", "abc")
console.log(prabhakar.email);
console.log(prabhakar.password);