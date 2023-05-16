import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IconButton } from '@mui/material';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import {
  addToFavorites,
  deleteFromFavorite,
  getCurrentUser,
} from 'redux/user/userOperations';
import { getFavorite } from 'redux/user/userSelectors';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { deleteFavoriteObj } from 'redux/user/userSlice';

const FavoriteIconButton = ({ noticeid }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const [isFavorites, setIsFavorites] = useState(false);
  const favoriteElement = useSelector(state => state.user.favorite);
  // const dataArray = Array.isArray(favoriteElement)
  // ? favoriteElement
  // : Array.from(favoriteElement);
  // const isFavorite = dataArray.includes(noticeid);

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      toast.info(
        'You must be registered or logged in to continue the operation'
      );
      return;
    }
    const checkId = favoriteElement.map(el => el._id).includes(noticeid);
    console.log(checkId);
    if (checkId) {
      dispatch(deleteFromFavorite(noticeid));
      dispatch(deleteFavoriteObj(noticeid));
      toast.error('Removed from favorites');
    } else {
      dispatch(addToFavorites(noticeid));
      toast('Added to favorites');
    }
  };
  console.log(favoriteElement);
  return (
    <IconButton
      // color={isFavorites ? 'secondary' : 'default'}
      onClick={handleFavoriteClick}
    >
      <IconHeart />
    </IconButton>
  );
};

export default FavoriteIconButton;
