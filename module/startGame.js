const btnGameWraper = document.querySelector(".body-app__btn-wraper");
const pickedWraper = document.querySelector(".start-game");
const pickedPlayer = document.querySelector(".start-game__player-choise");
const pickedBot = document.querySelector(".bot");
const pickedBotNonActive = document.querySelector(".start-game__bot-nonactive");
const pickedBotActive = document.querySelector(".start-game__bot-active");
const choisePick = ["paper-btn", "rock-btn", "scissors-btn"];
// const srcImgPick = new Map([
//   ["paper-btn", "./images/icon-paper.svg"],
//   ["rock-btn", "./images/icon-rock.svg"],
//   ["scissors-btn", "./images/icon-scissors.svg"],
// ]);

const createRandomNum = (num) => Math.floor(Math.random() * num + 1);
const startBotPicked = function (btnBotW, btnBotWHide, pickedBotE) {
  const choiseIndex = createRandomNum(3) - 1;
  setTimeout(() => {
    btnBotWHide.classList.add("hidden");
    btnBotW.classList.remove("hidden");
    pickedBotE.classList.add(choisePick[choiseIndex]);
    console.log(pickedBotE);
    pickedBotE.firstElementChild.src = `./images/icon-${
      choisePick[choiseIndex].split("-")[0]
    }.svg`;
  }, 1000);
};

const startGame = function (btnGameW, btnClickClass) {
  btnGameW.addEventListener("click", (e) => {
    const parent = e.target.closest(btnClickClass);
    if (!parent) return;
    pickedPlayer.classList.add(parent.className.split(" ")[1]);
    pickedPlayer.firstElementChild.src = parent.firstElementChild.src;
    btnGameWraper.classList.add("hidden");
    pickedWraper.classList.remove("hidden");
    startBotPicked(pickedBotActive, pickedBotNonActive, pickedBot);
  });
};
startGame(btnGameWraper, ".body-app__btn");
