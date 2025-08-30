import "./RpcGame.css";
import Header from "../Header/Header";
import "../ScoreBox/ScoreBox";
import Logo from "../Logo/Logo";
import ScoreBox from "../ScoreBox/ScoreBox";
import Main from "../Main/main";
import GameBtn from "../GameBtn/GameBtn";

export default function RpcGame() {
  const btnLogicDatas = ["rock", "paper", "scissors", "lizard", "spock"];
  return (
    <div className="rpc-game">
      <Header>
        <Logo />
        <ScoreBox playerScore={12} />
      </Header>
      <Main>
        {btnLogicDatas.map((btnData, i) => (
          <GameBtn img={btnData} index={i} key={i} />
        ))}
      </Main>
    </div>
  );
}
