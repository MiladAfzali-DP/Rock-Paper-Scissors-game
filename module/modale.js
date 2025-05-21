const btnRule = document.getElementById("rulesBtn");
const btnCloseModale = document.querySelector(".modale-rule__close-btn");

const modaleWraper = document.querySelector(".modale-rule");
const bgHide = document.querySelector(".background-hide");

const hiddenModale = function () {
  modaleWraper.classList.add("hidden");
  bgHide.classList.add("hidden");
};
hiddenModale();
btnRule.addEventListener("click", function (e) {
  modaleWraper.classList.remove("hidden");
  bgHide.classList.remove("hidden");
});

btnCloseModale.addEventListener("click", hiddenModale);
