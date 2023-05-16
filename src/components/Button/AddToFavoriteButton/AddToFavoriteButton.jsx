import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IconButton } from '@mui/material';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';
import { getFavorite } from 'redux/user/userSelectors';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

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

    // if (isFavorites) {
    //   toast.error('Removed from favorites');
    //   dispatch(deleteFromFavorite(noticeid));
    //   setIsFavorites(false);
    // } else {
    //   toast('Added to favorites');
    //   dispatch(addToFavorites(noticeid));
    //   setIsFavorites(true);
    // }
  };
  console.log(favoriteElement);
  return (
    <IconButton
      // color={isFavorite ? 'secondary' : 'default'}
      onClick={handleFavoriteClick}
    >
      <IconHeart />
    </IconButton>
  );
};

export default FavoriteIconButton;
