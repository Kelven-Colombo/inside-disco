import styled from "styled-components";
import LinksHeader from "../../ui/LinksHeader";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 30px;
  min-width: 120px;
  height: 100%;
  cursor: pointer;
`;

const textoOpcoes = ["ARTISTAS", "GÊNEROS", "FAVORITOS", "LISTAS"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <LinksHeader 
        to={`/${texto.toLowerCase()}`}
        key={texto}>
          <Opcao >{texto}</Opcao>
        </LinksHeader>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
