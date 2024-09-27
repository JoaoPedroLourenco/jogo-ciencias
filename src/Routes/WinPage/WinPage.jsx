import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const WinPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="winPage">
      <div className="textWinPage">
        <h1 style={{ zIndex: "1" }}>Parabéns!</h1>
        <p style={{ zIndex: "1" }}>Você descobriu todas as palavras!</p>
      </div>
      <Confetti width={width} height={height} style={{ zIndex: "0" }} />
    </div>
  );
};

export default WinPage;
