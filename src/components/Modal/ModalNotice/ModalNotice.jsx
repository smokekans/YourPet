import React from 'react';
import { useSelector } from 'react-redux';
import { getOneNotice } from 'redux/notices/noticesSelectors';
import CATEGORY from 'utils/constants';
import DialogContent from '@mui/material/DialogContent';
import {
  Button,
  DialogActions,
  Card,
  CardMedia,
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  SvgIcon,
} from '@mui/material';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import { ReactComponent as IconClose } from '../../../images/icons/cross-small.svg';
import styles from './styles';
// import { getFavorites } from 'redux/user/userSelectors';

function ModalNotice({ onClose, onhandleFavoriteClick }) {
  const getOne = useSelector(getOneNotice);
  // const isfavorite = useSelector(getFavorites);

  const {
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
          right: { mobile: 12, tablet: 26 },
          top: { mobile: 12, tablet: 23 },
          p: 0,
          m: 0,
        }}
      >
        {/* <SvgIcon
            component={IconClose}
            inheritViewBox
            htmlColor="rgba(254, 249, 249, 1)"
          /> */}
        <IconClose/>
      </IconButton>
      <DialogContent>
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
          </Typography><Typography sx={styles.commentText} component="span">
           {comments}
          </Typography>
          
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onhandleFavoriteClick}
          sx={styles.button}
          aria-label="add"
        >
          {/* {!isfavorite ? "Remove from" : "Add to"} */}
          Add to &nbsp;
          <SvgIcon
            component={IconHeart}
            inheritViewBox
            htmlColor="rgba(254, 249, 249, 0)"
          />
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
