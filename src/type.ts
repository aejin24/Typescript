let isTrue: boolean = false;

let decimal: number = 12;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red"

let sentence: string = `color is ${color}`;

let student: {name: string, id: number, addr?: string} = {name: "lee", id: 1};

type NameTypes = {
    firstName: string,
    lastName: string
}

let student2: NameTypes = { firstName: "lee", lastName: "aejin"}

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;

let u:undefined = undefined;
let n: null = null;

console.log(isTrue)
console.log(decimal)
console.log(hex)
console.log(binary)
console.log(octal)
console.log(color)
console.log(sentence)
console.log(list)
console.log(list2)

warnUser()