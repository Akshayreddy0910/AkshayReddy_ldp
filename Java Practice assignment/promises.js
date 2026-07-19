let promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 Resolved");
});

promise1.then((result) => {
    console.log(result);
});

let promise2 = new Promise((resolve, reject) => {
    reject("Promise 2 Rejected");
});

promise2
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

let age = 20;

let promise3 = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Eligible to Vote");
    } else {
        reject("Not Eligible");
    }
});

promise3
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

let promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});

promise4.then((data) => {
    console.log(data);
});

new Promise((resolve) => {
    resolve(10);
})
.then((num) => {
    console.log(num);
    return num * 2;
})
.then((num) => {
    console.log(num);
    return num + 5;
})
.then((num) => {
    console.log(num);
});

let promise5 = Promise.resolve("Success");
promise5.then((result) => {
    console.log(result);
});

let promise6 = Promise.reject("Failed");
promise6.catch((error) => {
    console.log(error);
});

let p1 = Promise.resolve("HTML");
let p2 = Promise.resolve("CSS");
let p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])
.then((result) => {
    console.log(result);
});

let promise7 = new Promise((resolve) => {
    resolve("Completed");
});

promise7
.then((message) => {
    console.log(message);
})
.finally(() => {
    console.log("Execution Finished");
});

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("Even Number");
        } else {
            reject("Odd Number");
        }
    });
}

checkNumber(8)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});