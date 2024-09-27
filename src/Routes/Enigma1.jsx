import React from "react";

import tabelaCodigoMorse from "../assets/imgs/morseCodeTable.jpg";

const Enigma1 = () => {
  return (
    <div className="containerEnigmas">
      <h1>Primeira Etapa: Morse</h1>
      <img src={tabelaCodigoMorse} alt="tabela código morse" />

      <p className="morse">- .-. .- -. ... -.-. .-. .. -.-. .- ---</p>
    </div>
  );
};

export default Enigma1;
