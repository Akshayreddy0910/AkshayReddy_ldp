function getData(uid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
        }, 4000);
    });
}
async function displayEmail() {
    console.log("start");
    const email = await getData("skc");
    console.log("Email id of the user is: " + email);
    console.log("end");

}
displayEmail();