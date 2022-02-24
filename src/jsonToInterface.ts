// 만약 json 형태가 아래와 같이 있다면 interface를 이와 같이 구현할 수 있다 
const dataObject = {
    "People": {
        "Description": {
            "Title": "Json To Interface"
        },
        "Person": {
            "Name": "aejin",
            "Info": {
                "Phone": "010-000-0000",
                "Address": "대한민국",
                "Age": 24
            }
        }
    }
}



interface People {
    Description: Description,
    Person: Person
}

interface Description {
    Title: string
}

interface Person {
    Name: string,
    Info: Info
}

interface Info {
    Phone: string,
    Address: string,
    Age: number
}