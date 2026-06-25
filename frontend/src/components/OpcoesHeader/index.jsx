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
  padding: 0 10px;
  min-width: 120px;
  height: 100%;
  cursor: pointer;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <LinksHeader to={`/${texto.toLowerCase()}`}>
          <Opcao>
            {texto}
          </Opcao>
        </LinksHeader>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
