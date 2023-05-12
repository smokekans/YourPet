import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import CATEGORY from 'utils/constants';
import defaultImage from '../../../images/not-found.jpg';
import { ReactComponent as Location } from '../../../images/icons/location.svg';
import { ReactComponent as Clock } from '../../../images/icons/clock.svg';
import { ReactComponent as Male } from '../../../images/icons/male.svg';
import { ReactComponent as Female } from '../../../images/icons/female.svg';
import { getSingleNotice } from 'redux/notices/noticesOperation';

import styles from './styles';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
// import { getFavorite } from 'redux/user/userSelectors';
import FavoriteIconButton from 'components/Button/AddToFavoriteButton/AddToFavoriteButton';
import ModalNotice from 'components/Modal/ModalNotice/ModalNotice';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';

const NoticeCategoryItem = ({ data, categoryName }) => {
  const { _id, image, category, title, location, sex, birthday } = data || {};
  const dispatch = useDispatch();
  // const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const favoriteElement = useSelector(getFavorite);
  // const dataArray = Array.isArray(favoriteElement)
  //   ? favoriteElement
  //   : [favoriteElement];
  // const isFavorite = dataArray.includes(_id);

  // console.log(isFavorite)
  // console.log(_id)

const handleLearnMore = () => {
    setIsModalOpen(!isModalOpen);
    dispatch(getSingleNotice(_id));
  };


  const onClose = () => {
    setIsModalOpen(!isModalOpen);
  };

const handleFavoriteClick = () => {
  if (!isLoggedIn) {
    toast.info('You must be registered or logged in to continue the operation');
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



  // const deletePet = () => {
  // dispatch(deleteNotice({ id: _id }));
  // };

  const calcAge = dob => {
    if (dob === null) return '?';
    const diffMs = Date.now() - new Date(dob);
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
      <CardActionArea >
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
         <FavoriteIconButton noticeId={_id} />
        </Box>

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
        <CardContent sx={styles.content}>
          <Box>
            <Typography variant="h6">{title}</Typography>
          </Box>
          <Box>
            <Button type="button" onClick={handleLearnMore}>
              Learn more
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
      {
    
        isModalOpen && (
          <ModalNotice
            onClose={onClose}
            onAddToFavorite={handleFavoriteClick}
          />
        )
      
      }
    </Card>
  );
};

export default NoticeCategoryItem;

