import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { WrapperModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <>
      <WrapperModal onClick={handleBackdropClick}>{children}</WrapperModal>
    </>,
    modalRoot
  );
}
