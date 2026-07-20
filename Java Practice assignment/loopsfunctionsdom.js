for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

function greet(name) {
    console.log("Hello " + name);
}

greet("Akshay");

const square = (num) => num * num;
console.log(square(5));

const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

document.body.style.backgroundColor = "lightblue";

let heading = document.createElement("h2");
heading.innerText = "JavaScript DOM Example";
document.body.appendChild(heading);

let button = document.createElement("button");
button.innerText = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
    alert("Button Clicked");
});