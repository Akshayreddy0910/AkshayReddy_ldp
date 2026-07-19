let localScore = localStorage.getItem("localScore") || 0;
let sessionScore = sessionStorage.getItem("sessionScore") || 0;
document.getElementById("localScore").textContent = localScore;
document.getElementById("sessionScore").textContent = sessionScore;
function incrementScore() {
    localScore++;
    sessionScore++;
    localStorage.setItem("localScore", localScore);
    sessionStorage.setItem("sessionScore", sessionScore);
    document.getElementById("localScore").textContent = localScore;
    document.getElementById("sessionScore").textContent = sessionScore;
}
function resetScore() {
    localScore = 0;
    sessionScore = 0;
    localStorage.setItem("localScore", localScore);
    sessionStorage.setItem("sessionScore", sessionScore);
    document.getElementById("localScore").textContent = localScore;
    document.getElementById("sessionScore").textContent = sessionScore;
}