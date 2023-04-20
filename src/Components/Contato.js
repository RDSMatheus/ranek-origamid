import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Essa é a página de contato"/>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>matheus_rds1998@hotmail.com</li>
          <li>99 99999-9999</li>
          <li>Rua Ali Perto, 123</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
