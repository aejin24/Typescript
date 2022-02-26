export {};

// 1. 인터페이스 사용
interface OrderSheet {
    ingredient: string;
    keyCount: number;
}

function createKeyBoard(orderSheet: OrderSheet) {
    console.log(orderSheet.ingredient, orderSheet.keyCount);
}

let orderSheet = {
    ingredient: "plastic",
    keyCount: 24
}

createKeyBoard(orderSheet);

// 2. 선택적 프로퍼티
interface ToDo {
    title: string;
    text: string;
    name?: string;
}

function createTodo(todo: ToDo) {
    console.log(todo.title, todo.text, todo.name);
}

let todo1 = {
    title: "0216",
    text: "인터페이스 공부하기"
}

let todo2 = {
    title: "0216",
    text: "인터페이스 공부하기",
    name: "aejin"
}

createTodo(todo1); // name을 지정하지 않았기 때문에 undefined로 뜬다
createTodo(todo2);

// 3. 읽기 전용 프로퍼티
interface Member {
    name: string;
    readonly birth: string; // const와 동일한 역할을 수행한다
}

function getMember(member: Member) {
    console.log(member.name, member.birth);
    // member.birth = "1224"
    // Error: TS2540: Cannot assign to 'birth' because it is a read-only property.
}

let member = {
    name: "aejin",
    birth: "991224"
}

getMember(member);

// 4. 클래스와 인터페이스
interface Shape {
    size: number,
    getArea(): number
}

class Circle implements Shape { // implement한 클래스는 implements한 인터페이스 안의 내용을 다 사용해야한다
    // radius: number; // 멤버 변수 radius 값 설정
    // constructor(radius: number) {
    //     this.radius = radius
    // }

    constructor(
        public radius: number,
        public size: number
    ) {
        this.radius = radius,
        this.size = size
    }

    getArea(): number {
        this.size = Math.pow(this.radius, 2) * Math.PI;
        return this.size;
    }
}

class Rectangle implements Shape {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    //     this.width = width,
    //     this.height = height
    // }

    constructor(
        private width: number,
        private height: number,
        public size: number
    ) {
        this.width = width,
        this.height = height,
        this.size = size
    }

    getArea(): number {
        this.size = this.width * this.height
        return this.size;
    }
}

const shapes: Shape[] = [new Circle(3, 0), new Rectangle(10, 2, 0)] // 클래스 안 parameter 순서는 constructor에 정의한 순서

shapes.forEach(shape => {
    console.log(shape.getArea())
});

