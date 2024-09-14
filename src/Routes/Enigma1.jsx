import React from "react";

import tabelaCodigoMorse from "../assets/imgs/morseCodeTable.jpg";

import GoBack from "../components/GoBack";

const Enigma1 = () => {
  return (
    <div className="containerEnigmas">
      <GoBack />
      <h1>Primeira Etapa: Morse</h1>
      <img src={tabelaCodigoMorse} alt="tabela código morse" />

      <p>- .-. .- -. ... -.-. .-. .. -.-. .- ---</p>
    </div>
  );
};

export default Enigma1;
