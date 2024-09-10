import React from "react";
import enviar from "../../assets/imgs/mandar.png";
import { useState } from "react";

import styles from "../Form/Form.module.css";

const Form = () => {
  const [palavra, setPalavra] = useState("");
  const [transcricao, setTranscricao] = useState("");
  const [poli, setPoli] = useState("");
  const [ribo, setRibo] = useState("");

  const handleSubmit = (e) => {
    setPalavra(e.target.value);
  };

  const checarPalavra = (e) => {
    e.preventDefault();
    if (palavra === "transcrição") {
      setTranscricao("transcrição");
    } else if (palavra === "polimerase") {
      setPoli("polimerase");
    } else if (palavra === "ribossomos") {
      setRibo("ribossomos");
    } else {
      setPalavra("");
    }
    setPalavra("");
  };

  return (
    <div className={styles.formInserirPalavras}>
      <form onSubmit={checarPalavra}>
        <input
          type="text"
          placeholder="Insira uma palavra"
          value={palavra}
          onChange={handleSubmit}
          required
        />

        <button
          style={{
            backgroundImage: `url(${enviar})`,
            backgroundSize: "30px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></button>
      </form>

      <h2>Criado pelos alunos do 3° MTEC-PI em Desenvolvimento de Sistemas</h2>
    </div>
  );
};

export default Form;
