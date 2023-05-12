import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IconButton } from '@mui/material';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';
import { getFavorite } from 'redux/user/userSelectors';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const FavoriteIconButton = ({ noticeId }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn);
  const [isFavorites, setIsFavorites] = useState(false);
  const favoriteElement = useSelector(getFavorite);
  const dataArray = Array.isArray(favoriteElement)
    ? favoriteElement
    : [favoriteElement];
  const isFavorite = dataArray.includes(noticeId);

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      toast.info('You must be registered or logged in to continue the operation');
      return;
    }

    if (isFavorites) {
      toast.error('Removed from favorites');
      dispatch(deleteFromFavorite(noticeId));
      setIsFavorites(false);
    } else {
      toast('Added to favorites');
      dispatch(addToFavorites(noticeId));
      setIsFavorites(true);
    }
  };

  return (
    <IconButton color={isFavorite ? 'secondary' : 'default'} onClick={handleFavoriteClick}>
      <IconHeart />
    </IconButton>
  );
};

export default FavoriteIconButton;