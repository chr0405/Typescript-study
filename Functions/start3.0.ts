// call signatures
// 마우스 가져다 댔을 때 뜨는 거
type Add = (a : number, b : number) => number;

// 더 길게 작성하는 방법
type Add1 = {
    (a : number, b : number) : number
}

const add : Add = (a, b) => a + b 

// overloading
// 함수가 서로 다른 여러 개의 call signatures를 가지고 있을 때 발생

// 예시 1
type Add2 = {
    // overloading
    (a : number, b : number) : number
    (a : number, b : string) : number
}

const add1 : Add2 = (a, b) => {
    if(typeof b === "string")
        return a
    return a + b
}

// 예시 2
type Config = {
    path : string,
    state : object // 어떤 타입일지 모름
}

type Push = {
    // overloading
    (path : string) : void, // 아무것도 return 하지 않음
    (config : Config) : void
}

const push : Push = (config) => {
    if(typeof config === "string"){
        console.log(config)
    }
    else {
        console.log(config.path)
    }
}

// 파라미터 수가 다른 경우
type Add3 = {
    (a: number, b: number) : number
    (a: number, b: number, c? : number) : number
}

const add2 : Add3 = (a, b, c? : number) => {
    if(c) return a + b + c
    return a + b
}

add2(1, 2) // 정상
add2(1, 2, 3) // 정상
