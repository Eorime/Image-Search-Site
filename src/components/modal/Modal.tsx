import React, { FC, ReactNode } from "react";
import { ModalContent, Overlay } from "./styles";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={close}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
