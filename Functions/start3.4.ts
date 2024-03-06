// generic type 자세히

type Player2 <E> = {
    name : string,
    extraInfo : E
}

const ime2: Player2 <{favFood : string}> = {
    name: "ime",
    extraInfo : {
        favFood : "milktea"
    }
}

// 재사용
const summer1 : Player2<null> = {
    name : "summer",
    extraInfo : null
}

// 더 늘려서

type ImePlayer = Player2<{favFood : string}>

const ime3: ImePlayer = {
    name: "ime",
    extraInfo : {
        favFood : "milktea"
    }
}

// 더더 늘려서

type ImeExtra = {
    favFood : string
}

type ImePlayer1 = Player2<ImeExtra>

const ime4: ImePlayer = {
    name: "ime",
    extraInfo : {
        favFood : "milktea"
    }
}

// generic type을 사용하는 다른 방법
function printAllNumbers(arr : number[]){}
function printAllNumbers1(arr : Array<number>){}