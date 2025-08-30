import "./GameOption.css";

export default function GameOption({ children }) {
  return (
    <main className="main">
      {/* <div className="main__bg-image">
        <img src={bgImage} alt="" />
      </div> */}
      <div className="main__game-btn">{children}</div>
    </main>
  );
}
