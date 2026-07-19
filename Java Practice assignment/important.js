function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome to JavaScript");
}

greet("Akshay", message);

function calculate(a, b, operation) {
    operation(a, b);
}

calculate(10, 20, function (a, b) {
    console.log("Sum:", a + b);
});

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}

async function displayData() {
    console.log("Loading...");
    let result = await getData();
    console.log(result);
}

displayData();

let firstName = "Akshay";
let lastName = "Reddy";

console.log(`${firstName} ${lastName}`);

let numbers = [10, 20, 30];
let newNumbers = [...numbers, 40, 50];
console.log(newNumbers);

let student = {
    name: "Akshay",
    age: 21,
    course: "CSE"
};

let { name, age } = student;

console.log(name);
console.log(age);

function display(city = "Hyderabad") {
    console.log(city);
}

display();
display("Bangalore");

localStorage.setItem("username", "Akshay");
localStorage.setItem("course", "JavaScript");

console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("course"));

localStorage.removeItem("course");

sessionStorage.setItem("login", "true");
sessionStorage.setItem("email", "akshay@gmail.com");

console.log(sessionStorage.getItem("login"));
console.log(sessionStorage.getItem("email"));

sessionStorage.removeItem("email");