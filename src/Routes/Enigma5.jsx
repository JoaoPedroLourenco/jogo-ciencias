import React from "react";

import GoBack from "../components/GoBack";
import numeros from "../assets/imgs/Frame 15.png";
import quadro from "../assets/imgs/quadro.jpeg";

const Enigma5 = () => {
  return (
    <div className="containerEnigmas">
      <GoBack />
      <h1>Quinta Etapa: Quadro</h1>
      <img src={quadro} alt="" className="quadro"/>
      <img src={numeros} alt="numeros" className="numeros" />
    </div>
  );
};

export default Enigma5;
