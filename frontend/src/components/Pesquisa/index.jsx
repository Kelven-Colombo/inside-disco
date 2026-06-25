import Input from "../../ui/Input";
import { Titulo, Subtitulo } from "../../ui/Titulo/index";
import GridLivros from "../GridLivros";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../services/livros";
import { postFavorito } from "../../services/favoritos";

// seção que vai de borda a borda (tem o background)
const PesquisaSection = styled.section`
  width: 100%;
`;

// div interna que centraliza o conteúdo
const PesquisaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 85px 32px;
  text-align: center;
  color: #fff;
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }

  async function adicionaFavorito(livro) {
    await postFavorito(livro.id);
    alert(`Livro favoritado com sucesso!`);
  }

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <PesquisaSection>
      <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
        <Input
          placeholder="Escreva sua próxima leitura"
          onKeyDown={(evento) => {
            if (evento.key === "Enter") {
              const textoDigitado = evento.target.value;
              const resultadoPesquisa = livros.filter((livro) =>
                livro.nome.includes(textoDigitado),
              );
              setLivrosPesquisados(resultadoPesquisa);
            }
          }}
        />
        <GridLivros
          livros={livrosPesquisados}
          aoClicarNoLivro={adicionaFavorito}
        />
      </PesquisaContainer>
    </PesquisaSection>
  );
}

export default Pesquisa;
