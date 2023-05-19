import React from 'react';
import {
  Dialog,
  Box,
  Card,
  IconButton,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  SvgIcon,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactComponent as IconClose } from '../../../images/icons/cross-small-1.svg';
import { ReactComponent as IconPaw } from '../../../images/icons/pawprint.svg';

import styles from './styles';

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '20px',
    '@media (min-width: 768px)': { borderRadius: '40px' },
    p: 0,
  },
  '& .MuiDialogContent-root': {
    padding: '0px 0px 12px 0px',
  },
}));

function ModalCongrats({ onClick }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(!open);

  return (
    <BootstrapDialog
      open={!open}
      onClose={handleClose}
      // scroll={scroll}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-descriptionDialogActions"
    >
      <Card sx={styles.root}>
        <IconButton
          // onClick={onClose}
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
          <IconClose />
        </IconButton>
        <DialogContent>
          <Box sx={styles.content}>
            <Typography sx={styles.title} component={'h1'}>
              Congrats!
            </Typography>
            <Typography sx={styles.commentText} component={'p'}>
              Your registration is successful
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={styles.button}
            // aria-label="add"
          >
            Go to profile &nbsp;
            <SvgIcon
              component={IconPaw}
              inheritViewBox
              htmlColor="rgba(254, 249, 249, 0)"
            />
          </Button>
        </DialogActions>
      </Card>
    </BootstrapDialog>
  );
}

export default ModalCongrats;
