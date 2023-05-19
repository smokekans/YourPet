import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPets } from '../../../redux/user/userSelectors';
import { Container, IconButton } from '@mui/material';
import { Typography, Button } from '@mui/material';
import styles from './styles';
import { Avatar } from '@mui/material';
import { ReactComponent as Trash } from '../../../images/icons/trash.svg';
import { deletePets } from 'redux/user/userOperations';
import { getCurrentUser } from 'redux/user/userOperations';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
function PetsData() {
  const Pets = useSelector(getPets);
  const dispatch = useDispatch();

  console.log(Pets);

  function delet(id) {
    console.log(id);

    const peeet = Pets.filter(item => item._id !== id);

    console.log(peeet);
    dispatch(deletePets(id)).unwrap();

    dispatch(getCurrentUser());
  }
  return (
    <Container sx={styles.container}>
      <Box variant="div" sx={styles.pets}>
        My pets:
        <NavLink to="/add-pet">
          <Button sx={styles.btnAdd}> Add Pet +</Button>
        </NavLink>
      </Box>
      {!Pets ? (
        <div></div>
      ) : (
        <Container sx={styles.cssContainer}>
          <Typography variant="div">
            {Pets.map(({ _id, birthday, comments, image, name, breed }) => {
              return (
                <Typography sx={styles.cardPets} variant="div" key={_id + 7}>
                  <Avatar
                    variant="img"
                    src={image}
                    alt="image"
                    sx={styles.image}
                    height="161"
                    key={_id + 1}
                  />
                  <Typography
                    variant="div"
                    key={_id}
                    sx={{ width: '580px', mt: '8px' }}
                  >
                    <Typography
                      sx={styles.contInfo}
                      variant="div"
                      key={_id + 2}
                    >
                      <Typography
                        sx={styles.infoPets}
                        variant="p"
                        key={_id + 3}
                      >
                        Name: {name}
                      </Typography>
                      <br />
                      <Typography
                        sx={styles.infoPets}
                        variant="p"
                        key={_id + 4}
                      >
                        Data of dirth: {birthday}
                      </Typography>

                      <br />
                      <Typography
                        sx={styles.infoPets}
                        variant="p"
                        key={_id + 5}
                      >
                        Breed:{breed}
                      </Typography>
                      <br />
                      <Typography
                        sx={styles.infoPets}
                        variant="p"
                        key={_id + 6}
                      >
                        Comments: {comments}
                      </Typography>
                      <br />
                    </Typography>
                  </Typography>
                  <IconButton
                    sx={styles.btnTrash}
                    // startIcon={<Trash sx={styles.icon}/>}
                    onClick={() => delet(_id)}
                  >
                    <Trash />
                  </IconButton>
                </Typography>
              );
            })}
          </Typography>
        </Container>
      )}
    </Container>
  );
}

export default PetsData;
