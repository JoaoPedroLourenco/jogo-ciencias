import React from "react";

import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

const WinPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="winPage">
      <div className="textWinPage">
        <h1 style={{ zIndex: "1" }}>Parabéns!</h1>
        <p style={{ zIndex: "1" }}>Você descobriu todas as palavras!</p>
      </div>
      <Confetti
        style={{
          width: "100vw",
          zIndex: "0",
          position: "absolute",
          top: "0",
          left: "0",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default WinPage;
