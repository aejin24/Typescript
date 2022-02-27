export {};

enum Color {
    RED = 1,
    GREEN,
    BLUE
}

enum Color2 {
    RED,
    GREEN,
    BLUE
}

let c: Color = Color.BLUE
let colorName: string = Color[2]

let c2: Color2 = Color2.BLUE
let colorName2: string = Color2[2]

console.log(c) // 3
console.log(colorName) // GREEN
console.log(c2) // 2
console.log(colorName2) // BLUE

// const enums → 컴파일 후 js 코드에 클로저 정의가 포함되지 않는다 (성능 이슈로 인해 생김)
const enum Color3 {
    RED,
    GREEN,
    BLUE
}

console.log(Color3.BLUE);
console.log(Color3["BLUE"]);
// console.log(Color3[0]); → 인덱스로 접근할 수 없음