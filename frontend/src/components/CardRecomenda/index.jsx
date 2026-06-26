import styled from "styled-components";
import GridLivros from "../GridLivros";
import { Titulo } from "../../ui/Titulo/index";



const CardRecomendaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 32px;
`;

function CardRecomenda({ recomendacoes, adicionaFavorito }) {
  return (
    <CardRecomendaContainer>
      <Titulo $tamanhoFonte="30px" $alinhamento="left">
        Recomendações:
      </Titulo>
      <GridLivros livros={recomendacoes} aoClicarNoLivro={adicionaFavorito} />
    </CardRecomendaContainer>
  );
}

export default CardRecomenda;
