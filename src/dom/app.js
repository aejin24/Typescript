var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.render = function (divID, text) {
        var el = document.getElementById(divID); // 타입 단언
        var bodyEl = document.querySelector("body");
        el.innerText = text;
        bodyEl.style.backgroundColor = "#ACB6E5";
    };
    return MyClass;
}());
window.onload = function () {
    var myClass = new MyClass();
    myClass.render("content", "Hello world");
};
