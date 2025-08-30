import { useState } from "react";
import "./RpcGame.css";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import ScoreBox from "../ScoreBox/ScoreBox";
import GameResult from "../GameResult/GameResult";
import GameOption from "../GameOption/GameOption";
import GameBtn from "../GameBtn/GameBtn";

import botChoiceLogic from "../../Logic/botChoiceLogic";

export default function RpcGame() {
  // Btn Data
  const btnLogicDatas = ["rock", "paper", "scissors", "lizard", "spock"];

  // State Hook
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");

  // Hnadle Fun
  const handlePlayerChoice = (choice) => setPlayerChoice(choice);

  // if (playerChoice === botChoice) setBotChoice(botChoiceLogic(btnLogicDatas));

  const botChoice = botChoiceLogic(btnLogicDatas);
  return (
    <div className="rpc-game">
      <Header>
        <Logo />
        <ScoreBox score={score} />
      </Header>
      {score || (
        <GameOption>
          {btnLogicDatas.map((btnData, i) => (
            <GameBtn
              btnMode={btnData}
              i={i}
              key={i}
              onPlayerChoice={handlePlayerChoice}
            />
          ))}
        </GameOption>
      )}
    </div>
  );
}
