export default function winLogic(playerChoice, botChoice) {
  if (!playerChoice || !botChoice) return;
  let isWin;
  if (playerChoice === "rock") {
    if (botChoice === "rock") isWin = "equal";
    if (botChoice === "paper") isWin = false;
    if (botChoice === "spock") isWin = false;
    if (botChoice === "lizard") isWin = true;
    if (botChoice === "scissors") isWin = true;
  }
  if (playerChoice === "paper") {
    if (botChoice === "paper") isWin = "equal";
    if (botChoice === "rock") isWin = true;
    if (botChoice === "spock") isWin = true;
    if (botChoice === "lizard") isWin = false;
    if (botChoice === "scissors") isWin = false;
  }
  if (playerChoice === "spock") {
    if (botChoice === "spock") isWin = "equal";
    if (botChoice === "rock") isWin = true;
    if (botChoice === "paper") isWin = false;
    if (botChoice === "lizard") isWin = false;
    if (botChoice === "scissors") isWin = true;
  }
  if (playerChoice === "lizard") {
    if (botChoice === "lizard") isWin = "equal";
    if (botChoice === "rock") isWin = false;
    if (botChoice === "paper") isWin = true;
    if (botChoice === "spock") isWin = true;
    if (botChoice === "scissors") isWin = false;
  }
  if (playerChoice === "scissors") {
    if (botChoice === "scissors") isWin = "equal";
    if (botChoice === "rock") isWin = false;
    if (botChoice === "paper") isWin = true;
    if (botChoice === "spock") isWin = false;
    if (botChoice === "lizard") isWin = true;
  }
  return isWin;
}
