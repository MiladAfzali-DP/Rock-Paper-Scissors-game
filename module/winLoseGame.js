import * as updateScore from "./updateScore.js";

export default function (choises) {
  const resultsGameWraper = document.querySelector(".results-game");
  const btnResultsGame = document.querySelector(".results-game__btn");
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
  if (choises[0] === choises[1]) {
    btnResultsGame.firstElementChild.classList.add("dark");
    playerPicked.classList.add("win");
    updateScore.addScore();
  } else {
    btnResultsGame.firstElementChild.classList.add("red");
    botPicked.classList.add("win");
    updateScore.reduceScore();
  }
}
