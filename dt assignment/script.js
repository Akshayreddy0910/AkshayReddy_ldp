let debounceTimer;
let lastExecution = 0;
function debounceSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        throttleSearch();
    }, 500);
}
function throttleSearch() {
    let currentTime = Date.now();
    if (currentTime - lastExecution >= 1000) {
        lastExecution = currentTime;
        let value = document.getElementById("search").value;
        document.getElementById("result").textContent =
            "Searching for: " + value;
        console.log("Searching:", value);
    }
}