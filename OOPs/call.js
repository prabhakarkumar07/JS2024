function SetUserName(userName) {
    this.userName = userName
    console.log('called');
}

function createUser(userName, email, password) {
    SetUserName.call(this, userName)

    this.email = email,
        this.password = password
}
const chai = new createUser("chai", "chai@gmail.com", "123")
console.log(chai);