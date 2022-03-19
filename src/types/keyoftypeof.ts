enum Brand {
    Nike = 'nike',
    Adidas = 'adidas',
    Puma = 'puma'
}

// enum은 객체로 변환된다
// typeof를 사용하면 enum 자체가 type이 된다
let type: typeof Brand = { Nike: Brand.Nike, Adidas: Brand.Adidas, Puma: Brand.Puma };
console.log(type);

// 객체의 property가 찍힘
let type2: keyof Brand;

// typeof Brand가 enum 객체 그 자체이고 그것들의 key를 뽑아낸 것
let type3: keyof typeof Brand;