import { useState, useEffect } from "react";
import { getLivros } from "../services/livros";
import { postFavorito } from "../services/favoritos";
import Pesquisa from "../components/Pesquisa";
import UltimosLancamentos from "../components/UltimosLancamentos";
import CardRecomenda from "../components/CardRecomenda";

const Home = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      const livrosDaAPI = await getLivros();
      setLivros(livrosDaAPI);
    }
    fetchLivros();
  }, []);

  const recomendacoes = livros.filter((livro) => livro.id < 5);

  async function adicionaFavorito(livro) {
    await postFavorito(livro.id);
    alert("Disco adicionado aos favoritos!")
  }

  return (
    <>
      <Pesquisa />
      <UltimosLancamentos livros={livros} adicionaFavorito={adicionaFavorito} />
      <CardRecomenda recomendacoes={recomendacoes} adicionaFavorito={adicionaFavorito} />
    </>
  );
};

export default Home;
