import React from 'react';
import {
  Box,
  Card,
  IconButton,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  SvgIcon,
} from '@mui/material';
import { ReactComponent as IconClose } from '../../../images/icons/cross-small.svg';
import { ReactComponent as IconTrash } from '../../../images/icons/trash.svg';

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
        }}
      >
        <SvgIcon
          component={IconClose}
          inheritViewBox
          htmlColor="rgba(254, 249, 249, 1)"
        />
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
          <SvgIcon
            component={IconTrash}
            inheritViewBox
            htmlColor="rgba(254, 249, 249, 0)"
          />
        </Button>
      </DialogActions>
    </Card>
  );
}

export default ModalApproveAction;
