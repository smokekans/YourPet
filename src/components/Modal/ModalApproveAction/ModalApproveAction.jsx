import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

function ModalApproveAction({ title, onClose, onDelete }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    function handleEscape(e) {
      if (e.code === 'Escape') onClose();
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdrop}>
      <div className={css.Modal}>
        <span onClick={()=>{onClose()}}>*</span>
        <h1>Delete adverstiment?</h1>
        <p>
          Are you sure you want to delete ${title}? You can`t undo this action.
        </p>
        <button onClick={()=>{onClose()}}>Cancel</button>
        <button onClick={()=>{onDelete()}}>Yes</button>
      </div>
    </div>,
    modalRoot
  );
  // <div>
  //   <div>
  //     <span>*</span>
  //     <h1>Delete adverstiment?</h1>
  //     <p>
  //       Are you sure you want to delete ${title}? You can`t undo this action.
  //     </p>
  //     <button>Cancel</button>
  //     <button>Yes</button>
  //   </div>
  // </div>
}

export default ModalApproveAction;
