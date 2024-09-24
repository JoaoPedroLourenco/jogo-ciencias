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

      <p>2.	Chave: (um número) sobre 
o príncipe dos filhos de Efraim, Elisama, filho de Amiúde.
3.	Será usado Cifra de César.
Na Cifra de César não poderá ser usado tradutor. 
</p>
    </div>
  );
};

export default Enigma7;
