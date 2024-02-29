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
`;

export const Picture = styled.img`
  border-radius: 4px;
  width: 200px;
  height: 200px;
`;

export const PictureContainer = styled.div`
  display: inline-block;
  margin: 30px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
