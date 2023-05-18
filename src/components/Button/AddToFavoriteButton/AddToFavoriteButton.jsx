import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IconButton } from '@mui/material';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';
import css from './AddToFavoriteButton.module.css';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { deleteFavoriteObj } from 'redux/user/userSlice';
import { useState } from 'react';

// const useStyles = makeStyles(theme => ({
//   favoriteButton: {
//     color: isFavorite => (isFavorite ? 'red' : 'gray'), // Встановлюємо колір fill в залежності від isFavorite
//   },
// }));

const FavoriteIconButton = ({ noticeid }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const favoriteElement = useSelector(state => state.user.favorite);
  const checkId = favoriteElement.map(el => el._id).includes(noticeid);
  // const classes = useStyles(isFavorite);

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      toast.info(
        'You must be registered or logged in to continue the operation'
      );
      return;
    }

    if (checkId) {
      dispatch(deleteFromFavorite(noticeid));
      dispatch(deleteFavoriteObj(noticeid));
      toast.error('Removed from favorites');
    } else {
      dispatch(addToFavorites(noticeid));
      toast('Added to favorites');
    }
  };
  return (
    <IconButton onClick={handleFavoriteClick}>
      {/* <IconHeart className={css.bcgHeart} /> */}
      <IconHeart className={checkId ? `${css.bcgHeart}` : ''} />
    </IconButton>
  );
};

export default FavoriteIconButton;
