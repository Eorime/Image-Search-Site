import styled from "styled-components";

export const ModalContainer = styled.div`
  margin-top: -50px;
  text-align: center;
`;

export const ModalImage = styled.img`
  width: 50%;
  height: 50%;
`;

export const ModalCloseButton = styled.button`
  font-family: helvetica;
  background-color: rgba(38, 74, 60, 100);
  color: rgba(220, 241, 225, 100);
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalImageContainer = styled.div`
  font-family: helvetica;
  color: rgba(38, 74, 60, 100);
  font-weight: bold;
`;
