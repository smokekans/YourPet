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
  ListItemText,
  IconButton,
} from '@mui/material';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';
import { ReactComponent as IconClose } from '../../../images/icons/cross-small.svg';
import styles from './styles';

function ModalNotice({ onClose, onhandleFavoriteClick }) {
  const getOne = useSelector(getOneNotice);

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
  } = getOne || {};

  return (
    <Card sx={styles.root}>
      <IconButton
        onClick={onClose}
        autoFocus
        sx={{
          position: 'absolute',
          zIndex: '2000',
          // display: 'inline-block',
          right: 26,
          top: 23,
          p: 0,
          m: 0,
        }}
      >
        <IconClose />
      </IconButton>
      <DialogContent>
        {/* <Box
          onClick={onClose}
          sx={styles.close}
        >
                <IconClose />
        </Box> */}
        <Box sx={styles.content}>
          <CardMedia
            component="img"
            src={image}
            sx={styles.media}
            title={title}
          />
          <Typography
            sx={styles.category}
            // variant="subtitle2"
          >
            {CATEGORY[category]}
          </Typography>
          <Box sx={styles.contentText}>
            <Typography component="h1" sx={styles.title}>
              {title}
            </Typography>
            <List sx={styles.list}>
              <ListItem sx={styles.listItem}>
                Name:
                <ListItemText sx={styles.listItemText}> {name}</ListItemText>
              </ListItem>
              <ListItem sx={styles.listItem}>
                Birthday:
                <ListItemText sx={styles.listItemText}>{birthday}</ListItemText>
              </ListItem>
              <ListItem sx={styles.listItem}>
                Breed:
                <ListItemText sx={styles.listItemText}>{breed}</ListItemText>
              </ListItem>
              <ListItem sx={styles.listItem}>
                Place:
                <ListItemText sx={styles.listItemText}>
                  {' '}
                  {location}
                </ListItemText>
              </ListItem>
              <ListItem sx={styles.listItem}>
                The sex:
                <ListItemText sx={styles.listItemText}>{sex}</ListItemText>
              </ListItem>
              <ListItem sx={styles.listItem}>
                Email:
                <ListItemText sx={styles.listItemText}>
                  <a href="mailto:{email}">{email}</a>
                </ListItemText>
              </ListItem>
              <ListItem sx={styles.listItem}>
                Phone:
                <ListItemText sx={styles.listItemText}>
                  <a href="tell:{phone}">{phone}</a>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box>
          <span>Comments: </span>
          {comments}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onhandleFavoriteClick}>
          Add to <IconHeart />
        </Button>
        <Button onClick={onClose} autoFocus>
          Contact
        </Button>
      </DialogActions>
    </Card>
  );

  // return createPortal(
  //   <div className={css.Overlay} onClick={handleBackdrop}>
  //     <div className={css.Modal}>
  //       <span
  //         onClick={() => {
  //           onClose();
  //         }}
  //       >
  //         Close
  //       </span>
  //       <img src={image} alt={title} width="150" height="150px" />
  //       <h1>{title}</h1>
  //       <ul>
  //         <li>
  //           <span>Name: </span>
  //           {name}
  //         </li>
  //         <li>
  //           <span>Birthday: </span>
  //           {birthday}
  //         </li>
  //         <li>
  //           <span>Breed: </span>
  //           {breed}
  //         </li>
  //         <li>
  //           <span>Place: </span>
  //           {location}
  //         </li>
  //         <li>
  //           <span>The sex: </span>
  //           {sex}
  //         </li>
  //         <li>
  //           <span>Email: </span>
  //           <a href="mailto:{email}">{email}</a>
  //         </li>
  //         <li>
  //           <span>Phone: </span>
  //           <a href="tell:{phone}">{phone}</a>
  //         </li>
  //       </ul>
  //       <p>
  //         <span>Comments: </span>
  //         {comments}
  //       </p>
  //       {/* {isFavorite ? <button onClick={AddAndClose}>Remove from favorite</button> : <button onClick={AddAndClose}>Add to favorite</button>} */}
  //       <button onClick={AddAndClose}>Add to favorite</button>
  //       <button>
  //         <a href="tell:{phone}">Contact</a>
  //       </button>
  //     </div>
  //   </div>,
  //   modalRoot
  // );
}

export default ModalNotice;
