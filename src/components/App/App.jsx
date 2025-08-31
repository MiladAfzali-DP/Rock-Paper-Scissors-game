import { useState } from "react";
import "./App.css";
import RpcGame from "../RpcGame/RpcGame";
import Button from "../Button/Button";
import PopUp from "../PopUp/PopUp";

export default function App() {
  const [score, setScore] = useState(+localStorage.getItem("score") || 0);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const handleOpenPopUp = () => setIsOpenPopUp(true);
  const handleClosePopUp = () => setIsOpenPopUp(false);
  return (
    <section className="app">
      {isOpenPopUp && (
        <PopUp onClosePopUp={handleClosePopUp}>
          {" "}
          <p>Your Score: {score}</p>
        </PopUp>
      )}
      <Button
        className="btn btn-save"
        onClick={() => {
          localStorage.setItem("score", score);
          handleOpenPopUp();
        }}
      >
        Save Score
      </Button>
      <RpcGame score={score} setScore={setScore} />
      <Button className="btn btn-rule">rules</Button>
    </section>
  );
}
