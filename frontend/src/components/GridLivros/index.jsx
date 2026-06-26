import styled from "styled-components";
import discoDefault from "../../Images/broken-vinyl.png";

const LivrosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 24px;
  padding: 0 32px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Livro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  cursor: pointer;

  img {
    width: 80%;
  }

  p {
    margin: 0;
    gap: 4px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: white;
  }
`;

function GridLivros({ livros = [], aoClicarNoLivro }) {
  return (
    <LivrosContainer>
      {livros.map((livro) => (
        <Livro key={livro.id} onClick={() => aoClicarNoLivro(livro)}>
          <img src={livro.capa || discoDefault} alt={livro.nome}></img>
          <p>{livro.nome}</p>
          <p>{livro.artista}</p>
        </Livro>
      ))}
    </LivrosContainer>
  );
}

export default GridLivros;
