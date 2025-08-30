import "./GameBtn.css";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import lizard from "../../assets/images/icon-lizard.svg";
import spock from "../../assets/images/icon-spock.svg";

const imagesDataSrc = {
  rock,
  paper,
  scissors,
  lizard,
  spock,
};

const borderGradient = [
  "hsl(349, 71%, 52%), hsl(349, 70%, 56%)",
  "hsl(230, 89%, 62%), hsl(230, 89%, 65%)",
  "hsl(39, 89%, 49%), hsl(40, 84%, 53%)",
  "hsl(261, 73%, 60%), hsl(261, 72%, 63%)",
  "hsl(189, 59%, 53%), hsl(189, 58%, 57%)",
];
const borderShadow = [
  "hsla(349, 70%, 56%, 0.65)",
  "hsla(230, 89%, 65%, 0.65)",
  "hsla(40, 84%, 53%, 0.65)",
  "hsla(261, 72%, 63%, 0.65)",
  "hsla(189, 58%, 57%, 0.65)",
];

export default function GameBtn({ btnMode, i, onPlayerChoice }) {
  const styleBtn = {
    position: "absolute",
    border: "1.2rem solid transparent",
    background: `linear-gradient(white, white) padding-box,
    linear-gradient(to bottom, ${borderGradient[i]})
      border-box`,
    boxShadow: `0 8px 0 ${borderShadow[i]},
    0 8px 0 rgb(226, 226, 226) inset`,
  };
  const stylePos = [
    {
      bottom: "-2.5rem",
      right: "10rem",
    },
    {
      top: "2.5rem",
      left: "6rem",
    },

    {
      top: "-4rem",
      left: 0,
      right: 0,
      margin: "0 auto",
    },
    {
      top: "2.5rem",
      right: "6rem",
      //   margin: "0 auto",
    },
    {
      bottom: "-2.5rem",
      left: "10rem",
      //   margin: "0 auto",
    },
  ];
  return (
    <div
      className="game-btn"
      style={{ ...styleBtn, ...stylePos[i] }}
      onClick={() => onPlayerChoice(btnMode)}
    >
      <img src={imagesDataSrc[btnMode]} alt="" />
    </div>
  );
}
