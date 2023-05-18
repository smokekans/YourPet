import React from 'react';
import {
  Box,
  Card,
  IconButton,
  DialogActions,
  DialogContent,
  Typography,
  Button,
} from '@mui/material';
import { ReactComponent as IconClose } from '../../../images/icons/cross-small-1.svg';
import { ReactComponent as IconTrash } from '../../../images/icons/trash-2.svg';

import styles from './styles';

function ModalApproveAction({ title, onClose, onDelete }) {
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
          '&:hover': {
            border: '1px solid #54ADFF',
          },
        }}
      >
        <IconClose/>
      </IconButton>
      <DialogContent>
        <Box sx={styles.content}>
          <Typography sx={styles.title}>Delete adverstiment?</Typography>
          <Typography sx={styles.commentText} component={'p'}>
            Are you sure you want to delete "
            <Typography sx={styles.titleText} component={'span'}>
              {title}
            </Typography>
            "? <br />
            You can't undo this action.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={styles.buttonBox}>
        {' '}
        <Button onClick={onClose} sx={styles.button}>
          Cancel
        </Button>
        <Button onClick={onDelete} sx={styles.button}>
          Yes
          <IconTrash
            width="24px"
          />
        </Button>
      </DialogActions>
    </Card>
  );
}

export default ModalApproveAction;
