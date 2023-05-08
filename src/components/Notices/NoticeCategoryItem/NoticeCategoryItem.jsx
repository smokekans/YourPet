import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getIsLoggedIn, getUserFavorite } from 'redux/auth/authSelectors';
import CATEGORY from 'utils/constants';
import defaultImage from '../../../images/not-found.jpg';
import {ReactComponent as IconHeart} from '../../../images/icons/heart.svg'
import { addToFavorites, deleteFromFavorite, getSingleNotice } from 'redux/notices/noticesOperation';
// import { getNoteceIsLoadig, getOneNotice } from 'redux/notices/noticesSelectors';



function NoticeCategoryItem({ data, categoryName }) {
  const { _id, image, category, title, } = data;
  console.log(data)
   const dispatch = useDispatch();
  const [ setActive] = useState(false);
  // const { pathname } = useLocation();
 
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const currentUser = useSelector(getUser);
  const favoriteElement = useSelector(getUserFavorite);
  const isFavorite = favoriteElement.includes(_id);
  // const dataInfo = useSelector(getOneNotice);
  // const isLoading = useSelector(getNoteceIsLoadig);


  
  const addToFavorite = () => {
    if (!isLoggedIn) {
      return toast.info('You must be registered or logged in, to continue the operation')
    }
    if (isLoggedIn) {
      toast('Added to favorite')
      dispatch(addToFavorites(_id))
    } else if (categoryName === 'favorite') {
      toast.error('Removed from favorite')
      dispatch(deleteFromFavorite(_id))
      
    }

    // тут должно быть добавление и удаление
  }

  // const checkedFavorite = () => {
  //   if (!isLoggedIn) {
  //     return favorite = false
  //   }
  //   const inFavorite = favoriteElement?.find(element => element === _id)
  //   if (inFavorite) {
  //     return favorite = true
  //   }

  //   return favorite = false
  // }

  const handleLearnMore = () => {
    setActive(true)
    dispatch(getSingleNotice(_id));
}

  return <>
    <li>
      <div>
        <img src={image ? image : defaultImage} alt="Pet" />
        <span>{CATEGORY[category]}</span>
        <button type = "button" favorite={isFavorite} onClick={addToFavorite}>
          <IconHeart/>
        </button>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <button type = "button" onClick={handleLearnMore}>
          Learn more
        </button>
      </div>
</li>
  </>;
}

export default NoticeCategoryItem;
