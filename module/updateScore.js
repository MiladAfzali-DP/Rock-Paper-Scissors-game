const scorePlayer = document.getElementById("scorePlayer");
let score;
const addScore = function () {
  score = +localStorage.getItem("score") + 1;
  localStorage.setItem("score", Number(score));
  scorePlayer.textContent = score;
};

const reduceScore = function () {
  score = +localStorage.getItem("score") - 1;
  if (score >= 0) {
    localStorage.setItem("score", score);
    scorePlayer.textContent = score;
  }
};

export { addScore, reduceScore };
