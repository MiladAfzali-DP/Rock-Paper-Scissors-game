import "./ScoreBox.css";
export default function ScoreBox({ score }) {
  return (
    <div className="score-box">
      <p>Score</p>
      <p>{score}</p>
    </div>
  );
}
