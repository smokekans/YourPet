import React, { useState } from 'react';
import { logout } from '../../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { Button, Dialog } from '@mui/material';
import { ReactComponent as Logout } from '../../../images/icons/logout.svg';
import styles from '../UserDataItem/styles';
import { styled } from '@mui/system';
import ModalApproveLogOut from 'components/ModalApproveLogOut/ModalApproveLogout';

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '20px',
    '@media (min-width: 768px)': { borderRadius: '40px' },
    p: 0,
  },
  '& .MuiDialogActions-root': {
    flexDirection: 'column',
    gap: '9px',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      gap: '8px',
    },
  },
}));


function UserLogOut() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogOut = () => {
    setIsModalOpen(!isModalOpen);
    dispatch(logout());
  };

  return (
    <>
      <Button
        sx={styles.btnLogOut}
        startIcon={<Logout />}
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Log Out
      </Button>
      <BootstrapDialog
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <ModalApproveLogOut
          onClose={() => {
            setIsModalOpen(!isModalOpen);
          }}
          onConfirm={handleLogOut}
        />
      </BootstrapDialog>
    </>
  );
}

export default UserLogOut;
