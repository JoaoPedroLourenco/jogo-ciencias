import React from "react";
import styles from "./Anotacoes.module.css";

const Anotacoes = () => {
  return (
    <div className={styles.anotacoes}>
      <div className={styles.anotacoesCard}>
        <p>Anotações</p>
        <textarea placeholder="Guarde informações aqui..."></textarea>
      </div>
    </div>
  );
};

export default Anotacoes;
