import { Titulo } from "../../ui/Titulo/index";
import GridLivros from "../GridLivros";
import styled from "styled-components";

const UltimosLancamentosSection = styled.div`
  width: 100%;
`;
const UltimosLancamentosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 32px;
`;

function UltimosLancamentos({ livros, adicionaFavorito }) {
  return (
    <UltimosLancamentosSection>
      <UltimosLancamentosContainer>
        <Titulo $cor="#ffe734" $tamanhoFonte="30px">
          Últimos Lançamentos
        </Titulo>
        <GridLivros livros={livros} aoClicarNoLivro={adicionaFavorito}/>
      </UltimosLancamentosContainer>
    </UltimosLancamentosSection>
  );
}

export default UltimosLancamentos;
