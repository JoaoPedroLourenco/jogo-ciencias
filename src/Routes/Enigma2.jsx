import React from "react";
import tabelaCodigoMorse from "../assets/imgs/morseCodeTable.jpg";

const Enigma2 = () => {
  return (
    <div className="containerEnigmas">
      <h1>Enigma 2</h1>
      <p>Transcrição</p>
      <img src={tabelaCodigoMorse} alt="tabela código morse" />

      <p>- .-. .- -. ... -.-. .-. .. -.-. .- ---</p>
    </div>
  );
};

export default Enigma2;
