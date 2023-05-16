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
import { getIsLoggedIn, getUser } from 'redux/auth/authSelectors';
import { addToFavorite } from 'redux/user/userSlice';

const FavoriteIconButton = ({ noticeid }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const [isFavorites, setIsFavorites] = useState(false);
  const user = useSelector(getUser);
  const favorite = useSelector(state => state.user.favorite);
  // const dataArray = Array.isArray(favoriteElement)
  //   ? favoriteElement
  //   : Array.from(favoriteElement);
  // const isFavorite = dataArray.includes(noticeid);

  useEffect(() => {
    dispatch(getCurrentUser());
    console.log(user);
  }, [dispatch]);

  const handleFavoriteClick = async () => {
    if (!isLoggedIn) {
      toast.info(
        'You must be registered or logged in to continue the operation'
      );
      return;
    }
    dispatch(addToFavorite(user.favorite));
    const idCheck = await favorite?.find(oneFav =>
      oneFav._id.includes(noticeid)
    );
    if (Boolean(idCheck)) {
      toast.error('Removed from favorites');
      dispatch(deleteFromFavorite(noticeid));
      return;
    } else {
      toast('Added to favorites');
      dispatch(addToFavorites(noticeid));
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
