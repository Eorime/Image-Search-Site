import styled from "styled-components";

export const InputWrapper = styled.div`
  text-align: center;
`;

export const Input = styled.input`
  border: 2px solid rgba(38, 74, 30, 0.44);
  border-radius: 4px;
  padding: 4px;
  &:focus {
    border-width: 3px;
    border-color: rgba(38, 74, 60, 0.74);
    outline: none;
  }
`;
