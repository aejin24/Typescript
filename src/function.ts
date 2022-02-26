export {};

// #1. 함수 type 정의
function add (num1: number, num2: number): number {
    return num1 + num2;
}

function isAdult (age: number): boolean {
    return age > 19;   
}

function add2 (num1: number, num2: number): void { // return 값이 없는 함수라면 void로 type을 지정한다
    console.log(num1 + num2)
}

// #2. 선택적 파라미터 (optional parameter)
function hello(name?: string): string {
    return `Hello, ${name || "world"}`;
}

hello();
hello("aejin");

function hello2(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}`;
    } else {
        return `Hello ${name}`;
    }
}

console.log(hello2("aejin"));
console.log(hello2("aejin", 24));

// #3. spread 연산자 (전달받은 매개 변수를 배열로 나타낼 수 있음)
function add3(...nums: Array<number>) {
    return nums.reduce((acc, currentValue) => acc + currentValue, 0);
}

add3(1, 2, 3);
add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// #4. this
interface User {
    name: string
}

const Sam: User = { name: "Sam" };

function showName(this:User, age:number, gender: string) {
    console.log(this.name, age, gender);
}

const a = showName.bind(Sam); // bind를 이용해서 this를 Sam 객체로 강제로 정하고 있다
a(24, "f");

// #5. overload
interface User2 {
    name: string,
    age: number
}

function join (name: string, age: number): User2;
function join (name: string, age: string): string;
function join (name: string, age: number | string): User2 | string {
    if (typeof age === "number") {
        return {
            name,
            age
        }
    } else {
        return "나이는 숫자로 입력해주세요"
    }
}

const sam: User = join("Sam", 30);
const jane: string = join("Jane", "30");