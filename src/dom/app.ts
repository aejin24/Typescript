class MyClass {
    public render(divID: string, text: string) {
        let el = document.getElementById(divID) as HTMLDivElement; // 타입 단언
        let bodyEl = document.querySelector("body") as HTMLBodyElement;

        el.innerText = text;
        bodyEl.style.backgroundColor = "#ACB6E5";
    }
}

window.onload = () => {
    let myClass = new MyClass();
    myClass.render("content", "Hello world");
}