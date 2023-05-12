import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

function ModalCongrats({ onClick }) {
  
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    function handleEscape(e) {
      if (e.code === 'Escape') onClick();
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClick]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClick();
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdrop}>
      <div className={css.Modal}>
        <h1>Congrats!</h1>
     <p>Your registration is success</p>
     <button onClick={()=>{onClick()}}>Go to profile</button>
      </div>
    </div>
    ,
    modalRoot
  );
}

export default ModalCongrats;
