import "./RpcGame.css";
import Header from "../Header/Header";
import "../ScoreBox/ScoreBox";
import Logo from "../Logo/Logo";
import ScoreBox from "../ScoreBox/ScoreBox";

export default function RpcGame() {
  return (
    <div className="rpc-game">
      <Header>
        <Logo />
        <ScoreBox playerScore={12} />
      </Header>
    </div>
  );
}
