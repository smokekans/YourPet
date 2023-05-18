import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IconButton } from '@mui/material';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';
import { getAccessToken } from 'redux/auth/authSelectors';
import { deleteFavoriteObj } from 'redux/user/userSlice';
import { useEffect, useState } from 'react';
import { getFavorites } from 'redux/user/userSelectors';

const FavoriteIconButton = ({ noticeid }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getAccessToken);
  const favoriteElement = useSelector(getFavorites);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const checkId = favoriteElement.map(el => el._id).includes(noticeid);
    setCheck(checkId);
  }, [favoriteElement, noticeid]);

  const handleFavoriteClick = () => {
    if (!accessToken) {
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
  console.log(check);
  return (
    <IconButton onClick={handleFavoriteClick}>
      <IconHeart fill={check ? '#54ADFF' : 'none'} />
    </IconButton>
  );
};

export default FavoriteIconButton;
