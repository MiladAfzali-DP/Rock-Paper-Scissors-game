import { useState } from "react";
import "./App.css";
import RpcGame from "../RpcGame/RpcGame";
import Button from "../Button/Button";
import PopUp from "../PopUp/PopUp";
import Modale from "../Modale/Modale";

export default function App() {
  const [score, setScore] = useState(+localStorage.getItem("score") || 0);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [isOpenModale, setIsOpenModale] = useState(false);

  // Handle Func
  const handleOpenPopUp = () => setIsOpenPopUp(true);
  const handleClosePopUp = () => setIsOpenPopUp(false);

  const handleOpenModale = () => setIsOpenModale(true);
  const handleCloseModale = () => setIsOpenModale(false);
  return (
    <section className="app">
      {isOpenPopUp && (
        <PopUp onClosePopUp={handleClosePopUp}>
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
      {isOpenModale && (
        <Modale
          onClick={() => {
            handleCloseModale();
          }}
        />
      )}
      <Button
        className="btn btn-rule"
        onClick={() => {
          handleOpenModale();
        }}
      >
        rules
      </Button>
    </section>
  );
}
