import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

export const ModalImage = styled.img`
  width: 20vw;
  border-radius: 8px;
`;

export const ModalCloseButton = styled.button`
  font-family: helvetica;
  background-color: rgba(38, 74, 60, 100);
  color: rgba(220, 241, 225, 100);
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 270px;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalImageContainer = styled.div`
  font-family: helvetica;
  color: rgba(220, 241, 225, 100);
  font-weight: bold;
`;
