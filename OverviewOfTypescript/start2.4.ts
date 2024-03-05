// unknown

let a3 : unknown;

// let b3 = a3 + 1; // 오류

if(typeof a3 === 'number'){
    let b3 = a3 + 1
}
if(typeof a3 === 'string'){
    let b3 = a3.toUpperCase()
}

// void
// 아무것도 return하지 않는 함수를 대상으로 사용

function hello(){
    console.log('x')
}

const x = hello();
// x.toUpperCase() // 오류. void는 upperCase 할 수 없음

// never
// 함수가 절대 return하지 않을 때 발생

function hello1(): never{
    // return "x" // return 하면 오류

    throw new Error("Error")
}

function hello2(name : string | number){
    if(typeof name === 'string'){
        name
    }else if(typeof name === 'number'){
        name
    } else {
        name // never이라고 뜸
    }
}