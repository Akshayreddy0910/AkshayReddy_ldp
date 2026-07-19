let firstName = "Akshay";
let lastName = "Reddy";

console.log(`${firstName} ${lastName}`);

const add = (a, b) => a + b;
console.log(add(10, 20));

const square = num => num * num;
console.log(square(5));

let numbers = [10, 20, 30];
let newNumbers = [...numbers, 40, 50];
console.log(newNumbers);

let num1 = [1, 2];
let num2 = [3, 4];
let merged = [...num1, ...num2];
console.log(merged);

function total(...marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return sum;
}

console.log(total(10, 20, 30, 40));

let student = {
    name: "Akshay",
    age: 21,
    course: "CSE"
};

let { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

let colors = ["Red", "Green", "Blue"];

let [c1, c2, c3] = colors;

console.log(c1);
console.log(c2);
console.log(c3);

function greet(city = "Hyderabad") {
    console.log(city);
}

greet();
greet("Bangalore");

let employees = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Akshay" }
];

employees.forEach(emp => console.log(emp.name));

let doubled = numbers.map(num => num * 2);
console.log(doubled);

let even = numbers.filter(num => num % 2 === 0);
console.log(even);

let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

let employee = {
    id: 101,
    name: "Akshay",
    department: "IT"
};

localStorage.setItem("employee", JSON.stringify(employee));

let localData = JSON.parse(localStorage.getItem("employee"));

console.log(localData);

localStorage.setItem("course", "JavaScript");
console.log(localStorage.getItem("course"));

localStorage.removeItem("course");

localStorage.setItem("city", "Hyderabad");
localStorage.clear();

sessionStorage.setItem("username", "Akshay");
sessionStorage.setItem("login", "true");

console.log(sessionStorage.getItem("username"));
console.log(sessionStorage.getItem("login"));

sessionStorage.setItem("theme", "Dark");
console.log(sessionStorage.getItem("theme"));

sessionStorage.removeItem("theme");

sessionStorage.setItem("language", "JavaScript");
sessionStorage.clear();

let person = {
    name: "Sunny",
    age: 22
};

let updatedPerson = {
    ...person,
    city: "Hyderabad"
};

console.log(updatedPerson);

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x);
console.log(y);