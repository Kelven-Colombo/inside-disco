import { Titulo } from "../../ui/Titulo/index";
import GridLivros from "../GridLivros";
import CardRecomenda from "../CardRecomenda";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../services/livros";

const UltimosLancamentosSection = styled.div`
  widith: 100%;
`;
const UltimosLancamentosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 32px;
`;

function UltimosLancamentos() {
  const [livros, setLivros] = useState([]);

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }

  useEffect(() => {
    fetchLivros();
  }, []);
  const recomendacoes = livros.filter((livro) => livro.id < 5);

  return (
    <UltimosLancamentosSection>
      <UltimosLancamentosContainer>
        <Titulo cor="#ffe734" tamanhoFonte="30px">
          Últimos Lançamentos
        </Titulo>
        <GridLivros livros={livros} />
        <CardRecomenda recomendacoes={recomendacoes} />
      </UltimosLancamentosContainer>
    </UltimosLancamentosSection>
  );
}

export default UltimosLancamentos;
