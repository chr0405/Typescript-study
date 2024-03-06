type Name = string;
type Age = number;

// readonly
type Player1 = {
    readonly name : Name,
    age? : Age
}

const playerMaker1 = (name: string) : Player1 => ({ name })
const ime1 = playerMaker1("ime1")
ime1.age = 12

const numbers : readonly number[] = [1, 2, 3, 4]
// numbers.push(1) // 오류

// Tuple
const player1 : [string, number, boolean] = ["ime", 1, true]
// player1[0] = 1 // 정해진 자료형이 아니므로 오류

// const player1 : readonly [string, number, boolean] = ["ime", 1, true]

let a1 : undefined = undefined;
let b1 : null = null;

// any
// ts를 빠져 나오는 방법
const a2 : any[] = [1, 2, 3, 4]
const b2 : any = true
a2 + b2 // 오류 없음