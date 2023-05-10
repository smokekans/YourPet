import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import CATEGORY from 'utils/constants';
import defaultImage from '../../../images/not-found.jpg';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import { ReactComponent as Location } from '../../../images/icons/location.svg';
import { ReactComponent as Clock } from '../../../images/icons/clock.svg';
import { ReactComponent as Male } from '../../../images/icons/male.svg';
import { ReactComponent as Female } from '../../../images/icons/female.svg';
import {
  addToFavorites,
  deleteFromFavorite,
  // deleteNotice,
  getSingleNotice,
} from 'redux/notices/noticesOperation';
import { getFavorite } from 'redux/notices/noticesSelectors';
import styles from './styles';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button
} from '@mui/material';

const NoticeCategoryItem = ({ data, categoryName }) => {
  const { _id, image, category, title, location, sex, birthday } = data || {};
  const dispatch = useDispatch();
  const [setActive] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const favoriteElement = useSelector(getFavorite);
  const isFavorite = favoriteElement.includes(_id);

  const addToFavorite = () => {
    if (!isLoggedIn) {
      return toast.info(
        'You must be registered or logged in to continue the operation'
      );
    }
    if (isLoggedIn) {
      toast('Added to favorites');
      dispatch(addToFavorites(_id));
    } else if (categoryName === 'favorite') {
      toast.error('Removed from favorites');
      dispatch(deleteFromFavorite(_id));
    }
  };

  const handleLearnMore = () => {
    setActive(true);
    dispatch(getSingleNotice(_id));
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
      <CardActionArea>
        <CardMedia
          sx={styles.media}
          image={image || defaultImage}
          title={title}
        />
        <Typography sx={styles.category}
          // variant="subtitle2"
        >
          {CATEGORY[category]}
        </Typography>
        <Box sx={styles.favorite}>
          <IconButton
            color={isFavorite ? 'secondary' : 'default'}
            onClick={addToFavorite}
          >
            <IconHeart />
          </IconButton>
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
            < Button type="button" onClick={handleLearnMore}>
              Learn more
            </ Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoticeCategoryItem;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { getIsLoggedIn } from 'redux/auth/authSelectors';
// import CATEGORY from 'utils/constants';
// import defaultImage from '../../../images/not-found.jpg';
// import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
// import { ReactComponent as Location } from '../../../images/icons/location.svg';
// import { addToFavorites, deleteFromFavorite, deleteNotice, getSingleNotice } from 'redux/notices/noticesOperation';
// import { getFavorite } from 'redux/notices/noticesSelectors';
// // import { getNoteceIsLoadig, getOneNotice } from 'redux/notices/noticesSelectors';

// function NoticeCategoryItem({ data, categoryName }) {
//   const { _id, image, category, title, sex, location, birthday, owner } = data || {};;
//   console.log(data)
//    const dispatch = useDispatch();
//   const [ setActive] = useState(false);
//   // const { pathname } = useLocation();

//   const isLoggedIn = useSelector(getIsLoggedIn);
//   // const currentUser = useSelector(getUser);
//   const favoriteElement = useSelector(getFavorite);
//   const isFavorite = favoriteElement.includes(_id);
//   // const dataInfo = useSelector(getOneNotice);
//   // const isLoading = useSelector(getNoteceIsLoadig);

//   const addToFavorite = () => {
//     if (!isLoggedIn) {
//       return toast.info('You must be registered or logged in, to continue the operation')
//     }
//     if (isLoggedIn) {
//       toast('Added to favorite')
//       dispatch(addToFavorites(_id))
//     } else if (categoryName === 'favorite') {
//       toast.error('Removed from favorite')
//       dispatch(deleteFromFavorite(_id))

//     }

//   }

//   // const checkedFavorite = () => {
//   //   if (!isLoggedIn) {
//   //     return favorite = false
//   //   }
//   //   const inFavorite = favoriteElement?.find(element => element === _id)
//   //   if (inFavorite) {
//   //     return favorite = true
//   //   }

//   //   return favorite = false
//   // }

//   const handleLearnMore = () => {
//     setActive(true)
//     dispatch(getSingleNotice(_id));
//   };

//   const deletePet = () => {
//     dispatch(deleteNotice({ id: _id }));
//   }

//   return <>
//     <li>
//       <div>
//         <img src={image ? image : defaultImage} alt="Pet" />
//         <span>{CATEGORY[category]}</span>
//         <button type="button"
//           favorite={isFavorite}
//           onClick={addToFavorite}
//         >
//           <IconHeart/>
//         </button>
//       </div>
//       <div>
//         <ul>
//           <li key={`${_id}+location`}>
//             <Location />
//             <h2>{ location}</h2>
//           </li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//       <div>
//         <h2>{title}</h2>
//       </div>
//       <div>
//         <button type = "button" onClick={handleLearnMore}>
//           Learn more
//         </button>
//       </div>
// </li>
//   </>;
// }
