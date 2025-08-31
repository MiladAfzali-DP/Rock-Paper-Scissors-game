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

export default function GameBtn({
  width = "clamp(2rem, 20vw, 9rem)",
  borderSize = "1.2rem",
  imgSize,
  btnMode,
  i,
  onClick = () => {},
  btnPosition,
  loading = false,
}) {
  let styleBtn;
  if (loading)
    styleBtn = {
      width,
      backgroundColor: "rgba(0,0,0,0.1)",
      boxShadow: "0 0 15px rgba(0,0,0,0.08)",
    };
  else
    styleBtn = {
      width,
      position: btnPosition ? "absolute" : "static",
      border: `${borderSize} solid transparent`,
      background: `linear-gradient(white, white) padding-box,
    linear-gradient(to bottom, ${borderGradient[i]})
      border-box`,
      boxShadow: `0 8px 0 ${borderShadow[i]},
    0 8px 0 rgb(226, 226, 226) inset`,
    };
  return (
    <div
      className="game-btn"
      style={btnPosition ? { ...styleBtn, ...btnPosition } : styleBtn}
      onClick={onClick}
    >
      {!loading && (
        <img
          src={imagesDataSrc[btnMode]}
          alt=""
          style={imgSize && { width: imgSize }}
        />
      )}
    </div>
  );
}
