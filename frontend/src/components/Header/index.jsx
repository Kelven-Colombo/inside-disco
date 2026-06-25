import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";
import LinksHeader from "../../ui/LinksHeader";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center; /* alinha logo e menu na mesma altura vertical */
  justify-content: space-between;
  padding: 20px 32px; /* dá respiro, tira o "colado no topo" */
`;

function Header() {
  return (
    <HeaderContainer>
      <LinksHeader to="/">
        <Logo />
      </LinksHeader>
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
