import { useEffect } from "react";
import "./PopUp.css";
export default function PopUp({ onClosePopUp, children }) {
  useEffect(
    function () {
      setTimeout(function () {
        onClosePopUp();
      }, 1000);
    },
    [onClosePopUp]
  );
  return <div className="pop-up">{children}</div>;
}
