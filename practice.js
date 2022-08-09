function User() {
    this.name = null;
    this.age = 0;
    /* this.getInfo = () => {
        console.log(this.name, '-', this.age)
    } */

    /* function getInfo() {} */
}

User.prototype.getInfo = function () {
    console.log(this.name, '-', this.age)
}

let user = new User();

user.constructor.prototype.getInfo = function () {
    console.log(`hehe you are ${this.age} years`)
} // you need this ONLY here

console.log(user)
user.getInfo()

let obj = new Boolean(true);
let cons = true;

console.log(obj,
    cons,
    obj === cons,
    obj == cons,
    cons instanceof Object,
    obj instanceof Boolean)

console.log(user.valueOf())
let o = new Object()
console.log(o.valueOf())
console.log(o.__proto__)

console.log(user.hasOwnProperty('getInfo'))
console.log(user.propertyIsEnumerable('getInfo'))
console.log(Object.prototype.isPrototypeOf(user))



let Storage = function (values) {
    this.values = values || {}
}

Storage.prototype.get = function (key) {
    return this.values[key]
}

Storage.prototype.set = function (key, value) {
    this.values[key] = value
}

// arrow functions can`t be used when we use 'this' 

let storage = new Storage({ name: 'John', surname: 'Doe' })
storage.set('weight', 100)
console.log(storage, storage.get('weight'))

class User {
    // classes always work as 'use strict'
    #isAdmin = true
    #age = 0
    constructor(name = 'Bebras') {
        this.name = name
    }
    sayHello() {
        console.log(`Hey, ${this.name}!`)
    }

    getIsAdmin() {
        return this.#isAdmin
    }

    get age() {
        return this.#age
    } // getter

    set age(age) {
        this.#age = age
    } // getter
}

let nuser = new User()
console.log(typeof (User), typeof (nuser))
user.sayHello()
console.log(nuser)
console.log(nuser.getIsAdmin())
console.log(nuser.age)

// class expression

const Person = class {
    ///
}

class Client extends User {
    ///
    constructor(name, message) {
        super(name)
        this.message = message
    }
}

let client = new Client('Nika', 'aaaaaaa')
console.log(client)

// STATIC - they are depends to class but not to object
class Car {
    static isAdmin = false;
    static msg() {
        ///
    }
}

// EXCEPTIONS = Error object


let price = -200
console.log(price)

function divide(a, b) {
    let result
    try {
        result = a / b
        if (b === 0) {
            throw new Error('Division by zero')
        }
    } catch (error) {
        result = null
        throw new Error('Please check your data and try again')
        // logger.fatal()
    }
    return result
}


function sendData() {
    let res
    let msg
    try {
        divide(2, 0)
    } catch (error) {
        res = false
        msg = error.message
    }
    return {ok: res, msg: msg}
}

console.log(sendData())

console.log('aaaaaaaaaaaaaaaaaaaaaaaaa')
