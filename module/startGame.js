import winLoseGame from "./winLoseGame.js";
import * as updateScore from "./updateScore.js";

//TODO Update Score
updateScore.addScore();
updateScore.reduceScore();

//TODO Var Dom
const pickedWraper = document.querySelector(".start-game");
const btnGameWraper = document.querySelector(".body-app__btn-wraper");
const pickedPlayer = document.querySelector(".start-game__player-choise");
const pickedBot = document.querySelector(".bot");
const pickedBotNonActive = document.querySelector(".start-game__bot-nonactive");
const pickedBotActive = document.querySelector(".start-game__bot-active");
const choisePick = ["paper-btn", "rock-btn", "scissors-btn"];
const choise = ["", ""];
//TODO Functions

//? Create Random Number For Choise Bot
const createRandomNum = (max, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

//? Choise Bot Picked
const startBotPicked = function (btnBotW, btnBotWHide, pickedBotE) {
  const choiseIndex = createRandomNum(3);
  setTimeout(() => {
    // Hide Defualt Show Choise
    btnBotWHide.classList.add("hidden");

    // Show Choise Bot
    btnBotW.classList.remove("hidden");

    // Add Choise Bot Class Name
    choise[1] = choisePick[choiseIndex];
    pickedBotE.classList.add(choise[1]);

    // Add Src Image Choise Bot
    pickedBotE.firstElementChild.src = `./images/icon-${
      choisePick[choiseIndex].split("-")[0]
    }.svg`;
    winLoseGame(choise);
  }, 500);
};

//TODO Event Listener

//? Choise Player Picked
btnGameWraper.addEventListener("click", (e) => {
  const parent = e.target.closest(".body-app__btn");
  if (!parent) return;

  // Get ClassName And Add To Choise Player
  choise[0] = parent.className.split(" ")[1];
  pickedPlayer.classList.add(choise[0]);

  // Set Src Image Btn Click To Src Image Choise Player
  pickedPlayer.firstElementChild.src = parent.firstElementChild.src;

  // Hide Btn Game
  btnGameWraper.classList.add("hidden");

  // Show PLayer And Bot Choise
  pickedWraper.classList.remove("hidden");

  // Choise Bot
  startBotPicked(pickedBotActive, pickedBotNonActive, pickedBot);
});
