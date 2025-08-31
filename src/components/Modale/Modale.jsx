import "./Modale.css";
import rulesImg from "../../assets/images/image-rules-bonus.svg";
export default function Modale({ onClick = () => {} }) {
  return (
    <div className="modale">
      <div className="modale__header">
        <p>Rules</p>
        <button onClick={onClick}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      <img src={rulesImg} />
    </div>
  );
}
