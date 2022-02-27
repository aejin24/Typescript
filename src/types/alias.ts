export {};

// 주로 union type 선언해야 하는데 길게 적고싶지 않을 때 사용하는 것처럼 보인다
type StringOrNumber = string | number;

function addWithAlias(arg1: StringOrNumber, arg2: StringOrNumber) {
    console.log(arg1.toString() + arg2.toString());
}

addWithAlias(1, 2)
addWithAlias("1", 2)
addWithAlias("1", "2")