import React, { useState } from 'react';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';
import { toast } from 'react-toastify';
// import { getFavorites } from 'redux/user/userSelectors';
import { deleteFavoriteObj } from 'redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getOneNotice } from 'redux/notices/noticesSelectors';
import { Button, Card, CardMedia, DialogActions, DialogContent, IconButton, List, ListItem, Typography } from '@mui/material';
import styles from './styles';
import { Box } from '@mui/system';
import CATEGORY from 'utils/constants';
import { ReactComponent as IconClose } from '../../../images/icons/cross-small-1.svg';
import { ReactComponent as IconHeart } from '../../../images/icons/heart-1.svg';
import { getAccessToken } from 'redux/auth/authSelectors';

function ModalNotice({ noticeid, onClose }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.user.favorite);
  const isFavorite = favorites.some((favorite) => favorite._id === noticeid);
  const isLoggedIn = useSelector(getAccessToken);
// console.log("!!!!!!!!!favorites", favorites)
  const getOne = useSelector(getOneNotice);
  const [isFavorites, setIsFavorites] = useState(false);
  console.log(isFavorites)
const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      toast.info(
        'You must be registered or logged in to continue the operation'
      );
      return;
    }

    if (isFavorite) {
      toast.warning('Removed from favorites');
      dispatch(deleteFromFavorite(noticeid));
      dispatch(deleteFavoriteObj(noticeid));
      setIsFavorites(false);
    } else {
      toast('Added to favorites');
      dispatch(addToFavorites(noticeid));
      setIsFavorites(true);
    }
  };
  
  const {
    _id,
    image,
    name,
    comments,
    phone,
    title,
    birthday,
    location,
    sex,
    breed,
    email,
    category,
    price,
  } = getOne || {};

  return (
    <Card sx={styles.root}>
      <IconButton
        onClick={onClose}
        autoFocus
        sx={{
          position: 'absolute',
          zIndex: '2000',
          right: { mobile: 12, tablet: 24 },
          top: { mobile: 12, tablet: 24 },
          p: 0,
          m: 0,
          width: '24px',
          height: '24px',
          '& svg': {
            stroke: '#54ADFF',
          },
        }}
      >
        <IconClose />
      </IconButton>
      <DialogContent >
        <Box sx={styles.content}>
          <CardMedia
            component="img"
            src={image}
            sx={styles.media}
            title={title}
          />
          <Typography sx={styles.category}>{CATEGORY[category]}</Typography>
          <Box sx={styles.contentText}>
            <Typography component="h1" sx={styles.title}>
              {title}
            </Typography>
            <List sx={styles.list}>
              <ListItem sx={styles.listItem}>
                Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Typography sx={styles.listItemText}> {name}</Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                Birthday:
                <Typography sx={styles.listItemText}>{birthday}</Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                Breed: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Typography sx={styles.listItemText}>{breed}</Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                Place: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Typography sx={styles.listItemText}>{location}</Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                The sex: &nbsp;&nbsp;
                <Typography sx={styles.listItemText}>{sex}</Typography>
              </ListItem>
              {category === 'sell' && (
                <ListItem sx={styles.listItem}>
                  Price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography sx={styles.listItemText}>{price}</Typography>
                </ListItem>
              )}
              <ListItem sx={styles.listItem}>
                Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Typography sx={styles.listItemText}>
                  <Typography
                    component="a"
                    sx={styles.linkT}
                    href={`mailto:${email}`}
                  >
                    {email}
                  </Typography>
                </Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                Phone: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Typography sx={styles.listItemText}>
                  <Typography
                    component="a"
                    sx={styles.linkT}
                    href={`tel:${phone}`}
                  >
                    {phone}
                  </Typography>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box>
          <Typography sx={styles.comment} component="span">
            Comments:{' '}
          </Typography>
          <Typography sx={styles.commentText} component="span">
            {comments}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions >
        <Button
          onClick={() => {
            handleFavoriteClick(_id)
            onClose()
          }} aria-label={isFavorite ? 'Remove from' : 'Add to'}
          sx={styles.buttonAdd}

        >
        {isFavorite ? 'Remove from' : 'Add to'}
          &nbsp;
            <IconHeart width="24px"/>
        </Button>
        <Button sx={styles.button}>
          <Typography
            component="a"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { color: 'inherit' },
            }}
            href={`tel:${phone}`}
          >
            Contact
          </Typography>
        </Button>
      </DialogActions>
    </Card>
  );
}

export default ModalNotice;


