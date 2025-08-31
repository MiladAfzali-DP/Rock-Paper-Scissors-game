import "./Result.css";
export default function Result({ txt, onResetGame }) {
  return (
    <div className="result">
      <p>{txt}</p>
      <button onClick={onResetGame}>play again</button>
    </div>
  );
}
