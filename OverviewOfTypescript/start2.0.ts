// ts가 자료형을 유추하는 경우 (data를 줌) <- 이 경우가 이상적임
let a = "hello" 
a = "bye" 
// a = 1

// ts에 자료형을 명시
let b : boolean = false
// let b : boolean = "x"

// 배열

let c = [1, 2, 3]
c.push(4)
// 같은 자료형이 아니니까 오류
// c.push("4")

// 배열이 비어있을 땐 자료형을 명시
let cArray : number[] = []
c.push(1)
// c.push("1") // 오류

// 객체 리터럴
const player = {
    name : "ime"
}

// player.hello() // 오류
// player.name = 1 // 오류

