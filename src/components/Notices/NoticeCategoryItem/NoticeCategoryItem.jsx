import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAccessToken } from 'redux/auth/authSelectors';
import CATEGORY from 'utils/constants';
import defaultImage from '../../../images/not-found.jpg';
import { ReactComponent as Location } from '../../../images/icons/location.svg';
import { ReactComponent as Clock } from '../../../images/icons/clock.svg';
import { ReactComponent as Male } from '../../../images/icons/male.svg';
import { ReactComponent as Female } from '../../../images/icons/female.svg';
import { ReactComponent as Busket } from '../../../images/icons/trash.svg';
import { ReactComponent as PawIcon } from '../../../images/icons/pawprint.svg';
import {
  deleteNotice,
  getSingleNotice,
  getUserNotices,
} from 'redux/notices/noticesOperation';

import styles from './styles';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
  Dialog,
} from '@mui/material';
import FavoriteIconButton from 'components/Button/AddToFavoriteButton/AddToFavoriteButton';
import ModalNotice from 'components/Modal/ModalNotice/ModalNotice';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';
import ModalApproveAction from 'components/Modal/ModalApproveAction/ModalApproveAction';
import { getUserId } from 'redux/user/userSelectors';

// import { useNavigate } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '20px',
    '@media (min-width: 768px)': { borderRadius: '40px' },
    p: 0,
  },
  '& .MuiDialogContent-root': {
    padding: '0px 0px 12px 0px',
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

const NoticeCategoryItem = ({ data, categoryName }) => {
  const { _id, image, category, title, location, sex, birthday, owner } =
    data || {};
  // console.log(data)

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);
  const userId = useSelector(getUserId);
  const [scroll, setScroll] = useState('body');
  const accessToken = useSelector(getAccessToken);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // const navigate = useNavigate();

  const handleLearnMore = () => {
    setScroll('body');
    setIsModalOpen(!isModalOpen);
    dispatch(getSingleNotice(_id));
  };

  const onClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFavoriteClick = () => {
    if (!accessToken) {
      toast.info(
        'You must be registered or logged in to continue the operation'
      );
      return;
    }

    if (isFavorites) {
      toast.error('Removed from favorites');
      dispatch(deleteFromFavorite(_id));
      setIsFavorites(false);
    } else {
      toast('Added to favorites');
      dispatch(addToFavorites(_id));
      setIsFavorites(true);
    }
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteNotice = () => {
    dispatch(deleteNotice(_id))
      .then(() => {
        handleDeleteModalClose();
        dispatch(getUserNotices({ page: 1 }));
      })
      .catch(error => {
        console.log('Error deleting notice:', error);
      });
  };
  const calcAge = dob => {
    if (dob === null) return '?';

    const parts = dob.split('.');
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    const diffMs = Date.now() - new Date(formattedDate);
    const ageDt = new Date(diffMs);

    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };

  const GenderIcon = ({ sex }) => {
    const IconComponent = sex === 'male' ? Male : Female;

    return (
      <>
        <IconComponent />
      </>
    );
  };

  return (
    <Card sx={styles.root}>
      <Box
      // sx={styles.wrapper}
      >
        <CardMedia
          sx={styles.media}
          image={image || defaultImage}
          title={title}
        />
        <Typography
          sx={styles.category}
          // variant="subtitle2"
        >
          {CATEGORY[category]}
        </Typography>

        <Box sx={styles.favorite}>
          <FavoriteIconButton noticeid={_id} />
        </Box>
        {owner === userId && accessToken ? (
          <Box sx={styles.delete}>
            <IconButton>
              <Busket noticeid={_id} onClick={handleDeleteModalOpen} />
            </IconButton>
          </Box>
        ) : (
          ''
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box sx={styles.components}>
            <Typography sx={styles.component} variant="subtitle2">
              <Location /> {location}
            </Typography>
            <Typography sx={styles.component} variant="subtitle2">
              <Clock /> {calcAge(birthday)} year
            </Typography>
            <Typography sx={styles.component} variant="subtitle2">
              <GenderIcon sex={sex} /> {sex}
            </Typography>
          </Box>
        </Box>
        <CardContent sx={styles.content}>
          <Box>
            <Typography variant="h5" sx={styles.title}>
              {title}
            </Typography>
          </Box>
          <Box sx={styles.buttonWraper}>
            <Button
              type="button"
              onClick={handleLearnMore}
              sx={styles.button}
              endIcon={<PawIcon fill="#54ADFF" />}
            >
              Learn more
            </Button>
            <BootstrapDialog
              open={isModalOpen}
              onClose={onClose}
              scroll={scroll}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-descriptionDialogActions"
            >
              <ModalNotice
                onClose={onClose}
                onhandleFavoriteClick={handleFavoriteClick}
              />
            </BootstrapDialog>
          </Box>
        </CardContent>
      </Box>
      <BootstrapDialog
        open={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
      >
        <ModalApproveAction
          title={title}
          onClose={handleDeleteModalClose}
          onDelete={handleDeleteNotice}
        />
      </BootstrapDialog>
    </Card>
  );
};

export default NoticeCategoryItem;
