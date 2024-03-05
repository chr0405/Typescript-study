// optional parameter를 지정하는 방법 (물음표를 붙임)
// 여러 객체를 생성하는 방법 (Alias 타입)
type Player = {
    name : string,
    age? : number
}

// 다른 가능한 방법
// type Name = string
// type Age = number

// type Player = {
//     name : Name,
//     age? : Age
// }

const ime : Player = {
    name : "ime"
}

const lynn : Player = {
    name : "lynn",
    age : 12
}

// 함수에 return type 명시
// Player type을 retunr 함
function playerMaker(name : string) : Player {
    return {
        name
    }
}

// 가능
// const playerMaker = (name : string) : Player => ({ name })

const summer = playerMaker("summer")
summer.age = 12