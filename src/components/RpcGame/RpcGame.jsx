import { useEffect, useState } from "react";
import "./RpcGame.css";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import ScoreBox from "../ScoreBox/ScoreBox";
import GameResult from "../GameResult/GameResult";
import GameOption from "../GameOption/GameOption";
import GameBtn from "../GameBtn/GameBtn";
import GameResultItem from "../GameResultItem/GameResultItem";
import winLogic from "../../Logic/winLogic";
import Result from "../Result/Result";
import botChoiceLogic from "../../Logic/botChoiceLogic";

export default function RpcGame() {
  // Data
  const btnLogicDatas = ["rock", "paper", "scissors", "lizard", "spock"];

  // State hook
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [botChoice, setBotChoice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [playerIsWin, setPlayerIsWin] = useState(null);

  // Effect hook
  useEffect(
    function () {
      setTimeout(function () {
        setIsLoading(false);
        // if (!playerChoice || !botChoice) return;
        // setPlayerIsWin(winLogic(playerChoice, botChoice));
        if (playerIsWin === true) setScore((score) => score + 1);
        if (playerIsWin === "equal") return;
        if (playerIsWin === false)
          setScore((score) => (score <= 0 ? score : score - 1));
      }, 500);
    },
    [playerIsWin]
  );

  useEffect(
    function () {
      if (!playerChoice || !botChoice) return;
      setPlayerIsWin(winLogic(playerChoice, botChoice));
    },
    [playerChoice, botChoice]
  );
  // Hnadle Fun
  const handlePlayerChoice = (choice) => setPlayerChoice(choice);
  const handleBotChoice = () => setBotChoice(botChoiceLogic(btnLogicDatas));
  const handleTurnOnLoading = () => setIsLoading(true);
  const handleResetGame = () => {
    setPlayerChoice(null);
    setBotChoice(null);
    setPlayerIsWin(null);
  };
  return (
    <div className="rpc-game">
      <Header>
        <Logo />
        <ScoreBox score={score} />
      </Header>
      {playerChoice ? (
        <GameResult>
          <GameResultItem title="you picked">
            <GameBtn
              width="clamp(2rem, 30vw, 14rem)"
              borderSize="1.6rem"
              imgSize="5rem"
              btnMode={playerChoice}
              i={btnLogicDatas.findIndex((choice) => playerChoice === choice)}
              key={0}
            />
          </GameResultItem>
          {!isLoading && playerIsWin === "equal" && (
            <Result txt="try again" onResetGame={handleResetGame} />
          )}
          {!isLoading && playerIsWin === true && (
            <Result txt="you win" onResetGame={handleResetGame} />
          )}
          {!isLoading && !playerIsWin && (
            <Result txt="you lose" onResetGame={handleResetGame} />
          )}
          <GameResultItem title="the house picked">
            <GameBtn
              width="clamp(2rem, 30vw, 14rem)"
              borderSize="1.6rem"
              imgSize="5rem"
              btnMode={botChoice}
              i={btnLogicDatas.findIndex((choice) => botChoice === choice)}
              key={1}
              loading={isLoading}
            />
          </GameResultItem>
        </GameResult>
      ) : (
        <GameOption>
          {btnLogicDatas.map((btnData, i) => (
            <GameBtn
              btnMode={btnData}
              imgSize="clamp(2rem, 9vw, 3.2rem)"
              i={i}
              key={i}
              onClick={() => {
                handlePlayerChoice(btnData);
                handleBotChoice();
                handleTurnOnLoading();
              }}
              className={`btn${i + 1}`}
              position="absolute"
            />
          ))}
        </GameOption>
      )}
    </div>
  );
}
