class Player3{
    constructor(
        private firstName : string,
        private lastName : string,
        public nickname : string,
    ) {}
}

const ime5 = new Player3("ime", "이매", "애매")

// 추상(abstract) 클래스

abstract class User{
    constructor(
        protected firstName : string,
        protected lastName : string,
        protected nickname : string,
    ) {}
    private getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // 추상 메소드
    // 코드가 없음.
    // 모든 자식들이 getNickname() 을 사용해야 함
    abstract getNickname() : void
}

class Player4 extends User {
    // private가 아닌 protected이기 때문에 가능
    getNickname(): void {
        console.log(this.firstName + ' ' + this.lastName)
    }
}

const ime6 = new Player4("ime", "이매", "애매")
// ime6.getFullName() // 오류

// protected면 이건 private와 같이 불가능
// ime6.firstName
