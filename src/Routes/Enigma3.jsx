import React from "react";

import alfabeto from "../assets/imgs/alfabeto.jpg";

import GoBack from "../components/GoBack";

const Enigma3 = () => {
  return (
    <div className="containerEnigmas">
      <GoBack />
      <img src={alfabeto} alt="" />
      <p>PAOBLCIDPEEFPGTHÍIDJEKOL</p>
    </div>
  );
};

export default Enigma3;
