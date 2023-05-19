import { Box, Button } from '@mui/material';
import styles from 'components/Notices/NoticesCategoriesNavigation/styles';
import React from 'react';
import { ReactComponent as SmallCross } from '../../../images/icons/plus-small.svg';
import { ReactComponent as Cross } from '../../../images/icons/plus.svg';
import useMatchMedia from 'hooks/useMatchMedia';
import { NavLink as Routerlink } from 'react-router-dom';

function AddPetButton() {
  const { isMobile } = useMatchMedia();

  return (
    <>
      {isMobile ? (
        <Box sx={styles.addButtonContainer}>
          <Button
            component={Routerlink}
            to="/add-pet"
            sx={styles.addButtonMobile}
          >
            <Cross
                fill="#FDF7F2"
              />
            Add Pet
          </Button>
        </Box>
      ) : (
        <Box sx={styles.addButtonContainer}>
          <Button component={Routerlink} to="/add-pet" sx={styles.addButton}>
            Add Pet
            <SmallCross stroke="#FDF7F2" />
          </Button>
        </Box>
      )}
    </>
  );
}

export default AddPetButton;
