import styled from "styled-components";
import livroDefault from "../../Images/capa_livro_duna.jpg";

function GridLivros({ livros = [], aoClicarNoLivro }) {
  const LivrosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
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
      width: 50%;
    }

    p {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      color: white;
    }
  `;

  return (
    <LivrosContainer>
      {livros.map((livro) => (
        <Livro key={livro.id} onClick={() => aoClicarNoLivro(livro)}>
          <img src={livro.src || livroDefault} alt={livro.nome}></img>
          <p>{livro.nome}</p>
        </Livro>
      ))}
    </LivrosContainer>
  );
}

export default GridLivros;
