import React from 'react';
import './Modal.sass';

export interface ModalProps {
  isOpen: boolean;
  setOpenModal: () => void;
  children?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  if (props.isOpen)
    return (
      <div className='modal-background'>
        <div>{props.children}</div>
      </div>
    );
  return null;
};
