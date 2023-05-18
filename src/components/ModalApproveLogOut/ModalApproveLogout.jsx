import React from 'react';
import {
  Card,
  IconButton,
  DialogActions,
  DialogContent,
  Button,
  SvgIcon,
} from '@mui/material';
import { ReactComponent as IconClose } from '../../images/icons/cross-small-1.svg';
import { ReactComponent as IconLogOut } from '../../images/icons/logout-2.svg';

import styles from './styles';

function ModalApproveLogOut({ onClose, onConfirm }) {
  return (
    <Card sx={styles.root}>
       <IconButton
        onClick={onClose}
        autoFocus
        sx={{
          position: 'absolute',
          zIndex: '2000',
          right: { mobile: 12, tablet: 24 },
          top: { mobile: 12, tablet: 24 },
          p: 0,
          m: 0,
          width: '24px',
          height: '24px',
          '& svg': {
            stroke: '#54ADFF',
          },
        }}
      >
        <IconClose/>
      </IconButton>
      <DialogContent sx={styles.title}>Already leaving?</DialogContent>
      <DialogActions sx={styles.buttonBox}>
        <Button onClick={onClose} sx={styles.button}>
          Cancel
        </Button>
        <Button onClick={onConfirm} sx={styles.button}>
          Yes  &nbsp;
          <SvgIcon
            component={IconLogOut}
            inheritViewBox
            htmlColor="rgba(254, 249, 249, 0)"
          />
        </Button>
      </DialogActions>
    </Card>
  );
}

export default ModalApproveLogOut;
