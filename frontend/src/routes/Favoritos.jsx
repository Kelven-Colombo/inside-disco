import { useState, useEffect } from "react";
import GridLivros from "../components/GridLivros";
import { deleteFavorito, getFavoritos } from "../services/favoritos";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  async function deletaFavorito(livro) {
    await deleteFavorito(livro.id);
    await fetchFavoritos();
    alert(`Livro deletado com sucesso!`);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <>
      <GridLivros livros={favoritos} aoClicarNoLivro={deletaFavorito} />
    </>
  );
};

export default Favoritos;
