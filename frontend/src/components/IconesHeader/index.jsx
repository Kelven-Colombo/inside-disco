import perfil from "../../Images/perfil.svg";
import sacola from "../../Images/sacola.svg";
import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <Icones className="icones">
      {icones.map((icone) => (
        <Icone key={icone}>
          <img src={icone}></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
