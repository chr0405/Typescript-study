// 사전 call signatures
type Words = {
    // 이름이 ket가 아니어도 됨
    [key : string] : string
}

// let dict : Words = {
//     "potato" : "food"
// }

class Dict {

    // private words : Words
    // 오류
    // initializer가 없고 Constructor에서 정의된 sign이 아니라서
    // 무슨 말이냐면
    // constructor(
    //     private words : Words
    // ) {}
    // 안 이래서 나는 오류

    private words : Words

    // initializer를 적어주면 해결
    constructor(){
        this.words = {}
    }

    // 추가
    add(word : Word /*클래스를 타입처럼 사용 가능*/){
        if(this.words[word.term]  === undefined){
            this.words[word.term] = word.def;
        }
    }

    // 찾기
    def(term : string){
        return this.words[term];
    }

    // 업데이트
    update(word : Word){
        if(this.words[word.term]  !== undefined){
            this.words[word.term] = word.def;
        }
    }

    // 삭제
    del(term : string){
        if(this.words[term]  !== undefined){
            delete this.words[term];
        }
    }
}

class Word {
    constructor(
        // Dict의 매소드에서 접근해야 하니까 public
        public readonly term : string,
        public readonly def : string
    ) {}
}

const potato = new Word("potato", "맛있는 음식");

const dict = new Dict();
dict.add(potato);