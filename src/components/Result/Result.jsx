import "./Result.css";
import Button from "../Button/Button";
export default function Result({ txt, onResetGame }) {
  return (
    <div className="result">
      <p>{txt}</p>
      <Button onClick={onResetGame}>play again</Button>
    </div>
  );
}
