import styled from "styled-components";

export const Titulo = styled.h2`
  color: ${(props) => props.$cor || "#ffffff"};
  font-size: ${(props) => props.$tamanhoFonte || "36px"};
  text-align: ${(props) => props.$alinhamento || "center"};
  width: 100%;
`;

export const Subtitulo = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;
