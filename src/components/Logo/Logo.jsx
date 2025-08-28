import logo from "../../assets/images/logo-bonus.svg";
export default function Logo() {
  const style = {
    width: "clamp(3rem, 20vw, 6.8rem)",
    // height: "100%",
  };
  return <img src={logo} alt="" style={style} />;
}
