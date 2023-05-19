import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IconButton } from '@mui/material';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';

import { getAccessToken } from 'redux/auth/authSelectors';
import { deleteFavoriteObj } from 'redux/user/userSlice';

const FavoriteIconButton = ({ noticeid }) => {
  const dispatch = useDispatch();
  const favoriteElement = useSelector(state => state.user.favorite);
  const accessToken = useSelector(getAccessToken);

  const handleFavoriteClick = () => {
    if (!accessToken) {
      toast.info(
        'You must be registered or logged in to continue the operation'
      );
      return;
    }
    const checkId = favoriteElement.map(el => el._id).includes(noticeid);
    if (checkId) {
      dispatch(deleteFromFavorite(noticeid));
      dispatch(deleteFavoriteObj(noticeid));
      toast.warning('Removed from favorites');
    } else {
      dispatch(addToFavorites(noticeid));
      toast('Added to favorites');
    }
  };
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
