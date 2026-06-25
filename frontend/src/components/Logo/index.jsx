import logo from "../../Images/k-books-logo.svg";
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
  max-width: 50px;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Logo da Alura Books" />
      <p>Books</p>
    </LogoContainer>
  );
}

export default Logo;
