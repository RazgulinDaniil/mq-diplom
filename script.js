const name = "Daniil";
let age = 18;
let boo = true;

const header = document.getElementById('headerer')


function sayHello() {
    let message = "Hello," + name;
    console.log(message);
}

sayHello();

function simpleMath(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMath(12, 34);

console.log(sum);

headerer.onclick = function () {
    if (headerer.classList.contains("yel")) {
        headerer.classList.remove("yel");
    } else {
        headerer.classList.add("yel");
    }
}