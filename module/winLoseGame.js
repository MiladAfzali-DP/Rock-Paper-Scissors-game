import * as updateScore from "./updateScore.js";

export default function (choises) {
  const resultsGameWraper = document.querySelector(".results-game");
  const btnResultsGame = document.querySelector(".results-game__btn");
  const titleResultGame = document.querySelector(
    ".results-game__title"
  ).firstElementChild;
  const pickedWraper = document.querySelector(".start-game");
  const btnGameWraper = document.querySelector(".body-app__btn-wraper");

  btnResultsGame.addEventListener("click", (e) => {
    if (!e.target.closest(".results-game__btn")) return;
    location.reload();
  });

  const botPicked =
    document.querySelector(".start-game__bot").lastElementChild
      .lastElementChild;
  const playerPicked = document.querySelector(
    ".start-game__player"
  ).lastElementChild;

  resultsGameWraper.classList.remove("hidden");
  console.log(choises[0]);
  console.log(choises[1]);
  if (choises[0] === choises[1]) {
    titleResultGame.textContent = "game even";
  } else if (
    (choises[0] === "scissors-btn" && choises[1] === "paper-btn") ||
    (choises[0] === "paper-btn" && choises[1] === "rock-btn") ||
    (choises[0] === "rock-btn" && choises[1] === "scissors-btn")
  ) {
    btnResultsGame.firstElementChild.classList.add("dark");
    playerPicked.classList.add("win");
    titleResultGame.textContent = "you win";
    updateScore.addScore();
  } else {
    btnResultsGame.firstElementChild.classList.add("red");
    botPicked.classList.add("win");
    titleResultGame.textContent = "you lose";
    updateScore.reduceScore();
  }
}
