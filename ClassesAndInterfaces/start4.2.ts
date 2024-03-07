type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

// type

type Player5 = {
    nickname : string,
    team : Team,
    health : Health
}

const ime7 : Player5 = {
    nickname : "ime",
    team : "yellow",
    health : 1
}

// interface
// 클래스나 오브젝트 모양을 특정해주기 위한 용도 (type은 포함 더 많은 기능을 할 수 있음)
// ex. type Team = "red" | "blue" | "yellow"
// react에서 많이 쓰인다

interface Player6 {
    nickname : string,
    team : Team,
    health : Health
}

const ime8 : Player6 = {
    nickname : "ime",
    team : "yellow",
    health : 1
}

// type

type User100000 = {
    name : string
}

type Player100000 = User100000 & {}

const ime9 : Player100000 = {
    name : "ime"
}

// interface

interface User10000 {
    fistName : string
}
interface User10000 {
    lastName : string
}interface User10000 {
    Nickame : string
}

interface Player10000 extends User10000 {}

// ts가 알아서 인터페이스를 합쳐줌
const ime10 : Player10000 = {
    fistName : "ime",
    lastName : "이매",
    Nickame : "애매"
}