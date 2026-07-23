const incrementScore = () => {
    localScore++;
    sessionScore++;
    localStorage.setItem("localScore", localScore);
    sessionStorage.setItem("sessionScore", sessionScore);
    document.getElementById("localScore").textContent = localScore;
    document.getElementById("sessionScore").textContent = sessionScore;
};
const resetScore = () => {
    localScore = 0;
    sessionScore = 0;
    localStorage.setItem("localScore", localScore);
    sessionStorage.setItem("sessionScore", sessionScore);
    document.getElementById("localScore").textContent = localScore;
    document.getElementById("sessionScore").textContent = sessionScore;
};
