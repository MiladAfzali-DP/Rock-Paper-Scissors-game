import "./GameOption.css";

export default function GameOption({ children }) {
  return (
    <div className="main">
      <div className="main__game-btn">{children}</div>
    </div>
  );
}
