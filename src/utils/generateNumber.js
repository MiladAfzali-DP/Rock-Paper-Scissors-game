export default function generateNumber(max, min = 0) {
  const num = Math.floor(Math.random() * (max - min) + min + 1);
  if (num > max)
    console.log("We Have Error to botChoice Logic(generateNumber)");
  return num;
}
