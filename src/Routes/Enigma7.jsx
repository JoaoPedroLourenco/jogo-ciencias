import React from "react";

import GoBack from "../components/GoBack";

import brainfuck from "../assets/imgs/brainfuck.png";

const Enigma7 = () => {
  return (
    <div className="containerEnigmas">
      <GoBack />
      <h1>Sétima Etapa: </h1>
      <img src={brainfuck} alt="" />
      <a
        href="https://www.dcode.fr/brainfuck-language
"
        target="_blank"
      >
        https://www.dcode.fr/brainfuck-language
      </a>
    </div>
  );
};

export default Enigma7;
