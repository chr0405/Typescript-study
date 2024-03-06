// polymorphism (다형성)
// generic type - ts가 type을 유추
// concrete type - ex. number, string, boolean

type SuperPrint = {
    // gemeric type의 이름은 마음대로 (대문자로 시작해야 함.)
    <typePlaceholder>(arr : typePlaceholder[]) : void
}

const superPrint : SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3])
superPrint(["1", "2", "3"])

type SuperPrint1 = {
    // gemeric type의 이름은 마음대로
    <T>(arr : T[]) : T
}

const superPrint1 : SuperPrint1 = (arr) => arr[0]

// 더 간단하게 선언하는 방법
function superPrint1Simple <T>(arr : T[]) {
    return arr[0]
}

const a4 = superPrint1([true, false, true])
const b4 = superPrint1([1, "2", true])
// call signatures가 맞춰서 뜸
// 위 이유로 type을 any로 쓰지 않고, generic type을 사용

type SuperPrint2 = <T, M>(a : T[], b : M) => T

const superPrint2 : SuperPrint2 = (arr) => arr[0]
const a5= superPrint2([1, "2", true], "x")
