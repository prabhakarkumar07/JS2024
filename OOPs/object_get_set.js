const User = {
    _email: "p@p.com",
    _password: "abc"
    ,

    get email() {
        return this._email.toUpperCase()
    }
    , set email(value) {
        return this._password = value
    }
}

const chai = Object.create(User)
console.log(chai.email);