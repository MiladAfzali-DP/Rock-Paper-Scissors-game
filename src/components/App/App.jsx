import { useState } from "react";
import "./App.css";
import RpcGame from "../RpcGame/RpcGame";
import Button from "../Button/Button";

export default function App() {
  const [score, setScore] = useState(+localStorage.getItem("score") || 0);
  return (
    <section className="app">
      <Button
        className="btn btn-save"
        onClick={() => {
          localStorage.setItem("score", score);
          console.log("setScore to localstoreg");
        }}
      >
        Save Score
      </Button>
      <RpcGame score={score} setScore={setScore} />
      <Button className="btn btn-rule">rules</Button>
    </section>
  );
}
