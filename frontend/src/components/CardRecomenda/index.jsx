import GridLivros from "../GridLivros";
import { Titulo } from "../../ui/Titulo/index";

function CardRecomenda({ recomendacoes }) {
  return (
    <div>
      <Titulo tamanhoFonte="30px" alinhamento="left">
        Talvez você se interesse por...
      </Titulo>
      <GridLivros livros={recomendacoes} />
      <button>Saiba mais</button>
    </div>
  );
}

export default CardRecomenda;
