import "./Main.css";
// import bgImage from "../../assets/images/bg-pentagon.svg";
export default function Main({ children }) {
  return (
    <main className="main">
      {/* <div className="main__bg-image">
        <img src={bgImage} alt="" />
      </div> */}
      <div className="main__game-btn">{children}</div>
    </main>
  );
}
