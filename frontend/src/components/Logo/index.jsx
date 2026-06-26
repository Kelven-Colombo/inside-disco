import logo from "../../Images/inside-disco-logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;

  p {
    margin: 0;
  }
`;

const LogoImage = styled.img`
  width: 150px;
  height: auto;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Logo da Inside Disco" />
    </LogoContainer>
  );
}

export default Logo;
