import React from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Ranek" description="Essa é a página de produtos" />
      {produtos.map((item) => (
        <Link to={`produto/${item.id}`} key={item.id}>
          <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
          <h1 className={styles.nome}>{item.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
