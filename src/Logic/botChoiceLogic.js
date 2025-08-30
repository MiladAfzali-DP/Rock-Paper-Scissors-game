import generateNumber from "../utils/generateNumber.js";
export default function botChoiceLogic(modes) {
  const randomNum = generateNumber(modes.length - 1);
  return modes[randomNum];
}
