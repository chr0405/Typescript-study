// interface가 class를 특정하는 경우

abstract class User1{
    constructor(
        protected firstName : string,
        protected lastName : string,
    ){}
    abstract sayHi(name : string) : string
    abstract fullName() : string
}

class Player7 extends User1 {
    sayHi(name: string) {
        return `Hello, ${name}. my name is ${this.firstName}`
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// interface

interface User2{
    firstName : string,
    lastName : string,
    sayHi(name : string) : string
    fullName() : string
}

// 두 개 이상 상속 가능

interface Human{
    health : number
}
// implements
class Player8 implements User2, Human {
    constructor(
        // public만 가능하다. 그 외에는 사용 불가능
        public firstName : string,
        public lastName : string,
        public health : number
    ){}
    sayHi(name: string) {
        return `Hello, ${name}. my name is ${this.firstName}`
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// class와 interface 둘 다 타입으로 쓸 수 있음

function makeUser (user : User1){
    return "hi"
}

function makeUser1 (user : User2){
    return "hi"
}