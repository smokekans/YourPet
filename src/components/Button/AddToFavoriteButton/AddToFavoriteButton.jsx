import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IconButton } from '@mui/material';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { deleteFavoriteObj } from 'redux/user/userSlice';
import { useEffect, useState } from 'react';

// const useStyles = makeStyles(theme => ({
//   favoriteButton: {
//     color: isFavorite => (isFavorite ? 'red' : 'gray'), // Встановлюємо колір fill в залежності від isFavorite
//   },
// }));

const FavoriteIconButton = ({ noticeid }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const favoriteElement = useSelector(state => state.user.favorite);
  const [check, setCheck] = useState(false);
  // const checkId = favoriteElement.map(el => el._id).includes(noticeid);
  // const classes = useStyles(isFavorite);
  useEffect(() => {
    const checkId = favoriteElement.map(el => el._id).includes(noticeid);
    setCheck(checkId);
  }, [favoriteElement, noticeid]);
  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      toast.info(
        'You must be registered or logged in to continue the operation'
      );
      return;
    }

    if (check) {
      dispatch(deleteFromFavorite(noticeid));
      dispatch(deleteFavoriteObj(noticeid));
      toast.error('Removed from favorites');
    } else {
      dispatch(addToFavorites(noticeid));
      toast('Added to favorites');
    }
  };
  console.log(isLoggedIn);
  return (
    <IconButton onClick={handleFavoriteClick}>
      {/* <IconHeart className={check ? `${css.bcgHeart}` : ''} /> */}
      <IconHeart fill={check ? '#54ADFF' : 'none'} />
    </IconButton>
  );
};

export default FavoriteIconButton;
