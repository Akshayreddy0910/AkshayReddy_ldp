import "./style.css";

import { add, subtract, multiply } from "./math";
import { message } from "./message";
import Student from "./student";
import { greet } from "./utils";
import { copy, name, age } from "./array";

import "./A";

console.log(message);

console.log(add(10, 20));

console.log(subtract(20, 10));

console.log(multiply(10, 5));

const student = new Student("Akshay", 22);

student.display();

greet();

greet("John");

console.log(copy);

console.log(name);

console.log(age);