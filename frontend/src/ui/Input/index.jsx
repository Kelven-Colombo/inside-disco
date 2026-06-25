import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #fff;
  padding: 20px 24px;
  border-radius: 50px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  color: #000000;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #7d7d7d;
    font-size: 16px;
  }
`;
export default Input;
