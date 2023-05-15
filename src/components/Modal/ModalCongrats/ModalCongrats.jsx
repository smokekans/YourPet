import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { Modal } from '@mui/material';


const modalRoot = document.querySelector('#modal-root');

function ModalCongrats({ onClick }) {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   window.addEventListener('keydown', handleEscape);
  //   function handleEscape(e) {
  //     if (e.code === 'Escape') onClick();
  //   }
  //   return () => {
  //     window.removeEventListener('keydown', handleEscape);
  //   };
  // }, [onClick]);

  // const handleBackdrop = e => {
  //   if (e.target === e.currentTarget) onClick();
  // };

  return createPortal(
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description" className={css.Overlay}
      // onClick={handleBackdrop}
    >
      <div className={css.Modal}>
        <h1>Congrats!</h1>
     <p>Your registration is success</p>
     <button onClick={()=>{onClick()}}>Go to profile</button>
      </div>
    </Modal>
    ,
    modalRoot
  );
}

export default ModalCongrats;
