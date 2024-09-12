import React from "react";

import styles from "../Texto/Texto.module.css";

import enviar from "../../assets/imgs/mandar.png";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Texto = () => {
  const [palavra, setPalavra] = useState("");
  const [campo1, setCampo1] = useState("");
  const [campo2, setCampo2] = useState("");
  const [campo3, setCampo3] = useState("");
  const [campo4, setCampo4] = useState("");
  const [campo5, setCampo5] = useState("");
  const [campo6, setCampo6] = useState("");
  const [campo7, setCampo7] = useState("");
  const [campo8, setCampo8] = useState("");
  const [campo9, setCampo9] = useState("");
  const [campo10, setCampo10] = useState("");
  const [campo11, setCampo11] = useState("");
  const [campo12, setCampo12] = useState("");
  const [campo13, setCampo13] = useState("");
  const [campo14, setCampo14] = useState("");
  const [campo15, setCampo15] = useState("");
  const [campo16, setCampo16] = useState("");
  const [campo17, setCampo17] = useState("");

  const [erro, setErro] = useState("");

  const checarPalavra = (e) => {
    e.preventDefault();

    if (palavra === "transcrição") {
      setCampo11("A transcrição gênica é a primeira etapa");
      setCampo12("a cópia da sequência de DNA ");
      setCampo13("produzir uma molécula");
      setCampo14(
        "transcrição, a sequência de DNA de um gene é copiada para fazer"
      );
      setCampo15(
        "transcrição pois envolve reescrever, ou transcrever, a sequência de DNA num 'alfabeto' similar de RNA. "
      );
    } else if (palavra === "polimerase") {
      setCampo17("Enzima polimerase: enzimas capazes de replicar");
    } else if (palavra === "ribossomos") {
      setCampo3("ribossomo se une");
      setCampo6("aminoácidos são trazidos ao ribossomo");
    } else if (palavra === "rna transportador") {
      setCampo2("de um RNA transportador que transporta");
      setCampo5("RNA transportador inicial");
      setCampo7(
        "pelos RNA transportadores e ligados entre si para formar uma cadeia."
      );
    } else if (palavra === "polipeptídio") {
      setCampo1("síntese de uma cadeia polipeptídica");
      setCampo8("polipeptídio completo é liberado");
    } else if (palavra === "rna mensageiro") {
      setCampo4("RNA mensageiro");
      setCampo10("RNAm bacteriano pode conter as sequências codificadoras");
      setCampo16("se tornar um RNA mensageiro maduro");
    } else if (palavra === "operons") {
      setCampo9(
        "genes bacterianos são frequentemente traduzidos em grupos chamados operons."
      );
    } else {
      setErro("Palavra não encontrada!");
    }

    setPalavra("");
  };

  return (
    <>
      <div className={styles.texto}>
        <h1>Transcrição e Tradução Gênica</h1>
        <p>
          A tradução gênica é o processo no qual ocorre a{" "}
          <NavLink to="/enigma1">{campo1}.</NavLink> Ele se inicia quando ocorre
          o emparelhamento <NavLink>{campo2}</NavLink> metionina com o códon de
          início de tradução localizado em um RNA mensageiro.
        </p>
        <br />
        <p>
          Primeiramente, o <NavLink>{campo3}</NavLink> ao{" "}
          <NavLink>{campo4}</NavLink> e ao <NavLink>{campo5}</NavLink> para
          iniciar a tradução. Em seguida, os <NavLink>{campo6}</NavLink>{" "}
          <NavLink>{campo7}.</NavLink>
          Finalmente, o <NavLink>{campo8}</NavLink> para cumprir sua função na
          célula.
        </p>

        <br />
        <p>
          Os <NavLink>{campo9}.</NavLink> Portanto, um{" "}
          <NavLink>{campo10}</NavLink> de muitos genes.
        </p>
        <br />

        <p>
          {campo11} da expressão do gene. Envolve {campo12} de um gene para{" "}
          {campo13} de RNA.
        </p>

        <br />
        <p>
          Na {campo14} uma molécula de RNA. Essa etapa é chamada de {campo15}{" "}
          Nos eucariontes, a molécula de RNA deve passar por um processamento
          para {campo16}.
        </p>
        <br />
        <p>
          Expressão gênica: processo pelo qual a informação hereditária contida
          em genes, utilizada para formar um produto gênico funcional, como
          proteínas ou RNA.
        </p>
        <br />
        <p>{campo17} uma fita de DNA.</p>
      </div>
      <div className={styles.formInserirPalavras}>
        <div className={styles.error}>
          <p>{erro}</p>
        </div>
        <form onSubmit={checarPalavra}>
          <input
            type="text"
            placeholder="Insira uma palavra"
            value={palavra}
            onChange={(e) => setPalavra(e.target.value)}
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

        <h2>
          Criado pelos alunos do 3° MTEC-PI em Desenvolvimento de Sistemas
        </h2>
      </div>
    </>
  );
};

export default Texto;
