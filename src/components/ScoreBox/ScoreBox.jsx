import "./ScoreBox.css";
export default function ScoreBox({ playerScore }) {
  return (
    <div className="score-box">
      <p>Score</p>
      <p>{playerScore}</p>
    </div>
  );
}
