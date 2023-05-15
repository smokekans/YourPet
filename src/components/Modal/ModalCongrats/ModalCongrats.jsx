// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <div onClick={handleOpen}>Registration</div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }























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
