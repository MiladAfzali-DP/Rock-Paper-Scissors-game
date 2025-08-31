import "./GameResultItem.css";
export default function GameResultItem({ title, children }) {
  return (
    <div className="game-result-item">
      <p>{title}</p>
      <div>{children}</div>
    </div>
  );
}
