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