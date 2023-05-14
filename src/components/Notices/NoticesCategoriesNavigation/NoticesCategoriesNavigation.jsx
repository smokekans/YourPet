import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getToken } from 'redux/auth/authSelectors';
// import { ReactComponent as SmallCross } from '../../../images/icons/plus-small.svg';
import {ReactComponent as Cross} from '../../../images/icons/plus.svg'
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import styles from './styles';



const StyledNavLink = styled(NavLink)(styles.link);
const StyledAddLink = styled(NavLink)(styles.addButton);

const NoticesCategoriesNavigation = () => {
  const userToken = useSelector(getToken);

  return (
    <Box sx={styles.navigationContainer}>
      <Box sx={styles.linksContainer}>
        <StyledNavLink to="/notices/sell" activeClassName="active">
          sell
        </StyledNavLink>
        <StyledNavLink to="/notices/lost-found" activeClassName="active">
          lost/found
        </StyledNavLink>
        <StyledNavLink to="/notices/for-free" activeClassName="active">
          in good hands
        </StyledNavLink>
        {userToken && (
          <>
            <StyledNavLink to="/notices/favorite" activeClassName="active">
              favorite ads
            </StyledNavLink>
            <StyledNavLink to="/notices/owner" activeClassName="active">
              my ads
            </StyledNavLink>
          </>
        )}
      </Box>
      <Box sx={styles.addButtonContainer}>
        <StyledAddLink to="/add-pet">
          {/* <Cross className={styles.mobileIcon}/> */}
           <Cross className={styles.icon}  width="16px"
          height="16px" 
           />
          Add Pet
         
      </StyledAddLink>
    </Box>
    </Box>
  );
};

export default NoticesCategoriesNavigation;

