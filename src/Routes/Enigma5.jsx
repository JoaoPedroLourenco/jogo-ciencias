import React from "react";

import numeros from "../assets/imgs/Frame 15.png";
import quadro from "../assets/imgs/quadro.jpeg";

const Enigma5 = () => {
  return (
    <div className="containerEnigmas">
      <h1>Quinta Etapa: Quadros</h1>
      <img src={quadro} alt="" />
      <img src={numeros} alt="numeros" className="numeros" />
    </div>
  );
};

export default Enigma5;
