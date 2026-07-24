const fetchUserEmail = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched data for ${uid}`);
            resolve(`${uid}@gmail.com`);
        }, 4000);
    });
};
const displayUserEmail = async () => {
    console.log("Start");
    const email = await fetchUserEmail("skc");
    console.log("Email id of the user is:", email);
    console.log("End");
};
displayUserEmail();
