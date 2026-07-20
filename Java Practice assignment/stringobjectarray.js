let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);

fruits.push("Orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.forEach((fruit) => {
    console.log(fruit);
});

let student = {
    name: "Akshay",
    age: 21,
    course: "CSE AIML"
};

console.log(student);
console.log(student.name);

student.city = "Hyderabad";
console.log(student);

let firstName = "Akshay";
let lastName = "Reddy";

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.concat(" ", lastName));
console.log(firstName.includes("sh"));

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();