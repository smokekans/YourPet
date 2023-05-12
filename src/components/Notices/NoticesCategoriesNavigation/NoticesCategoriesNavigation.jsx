import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getToken } from 'redux/auth/authSelectors';
import { ReactComponent as SmallCross } from '../../../images/icons/plus-small.svg';
import { styled } from '@mui/system';
import { Box } from '@mui/system';

const styles = {
  navigationContainer: {
    marginTop: '43px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linksContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    height: '35px',
    borderRadius: '40px',
    background: '#CCE4FB',
    color: '#000',
    textDecoration: 'none',
    padding: '0 16px',
    margin: '0 8px',
    '&.active': {
      background: '#54ADFF',
      color: '#fff',
    },
  },
  addButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  addButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    height: '40px',
    borderRadius: '40px',
    background: '#54ADFF',
    color: '#fff',
    textDecoration: 'none',
    padding: '0 16px',
  },
  icon: {
    marginLeft: '5px',
  },
};

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
          Add Pet <SmallCross className={styles.icon} />
        </StyledAddLink>
      </Box>
    </Box>
  );
};

export default NoticesCategoriesNavigation;

// import React from 'react'
// import { useSelector } from 'react-redux'
// import { NavLink } from 'react-router-dom';
// import { getToken } from 'redux/auth/authSelectors';
// import {ReactComponent as SmallCross} from '../../../images/icons/cross-small.svg'

// function NoticesCategoriesNavigation() {
//   const userToken = useSelector(getToken);

//   return (
//       <>
//           <nav>
//               <ul>
//                   <li>
//                     <NavLink to='/notices/sell'>sell</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to='/notices/lost-found'>lost/found</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to='/notices/for-free'>in good hands</NavLink>
//                   </li>

//                   {userToken && 
//                       <>
//                       <li>
//                         <NavLink to='/notices/favorite'>favorite ads</NavLink>
//                       </li>
//                       <li>
//                         <NavLink to='/notices/owner'>my ads</NavLink>
//                       </li>
//                       </>}
//         </ul>
//         <ul>
//           <li>
//             <NavLink to= '/add-pet'>Add Pet <SmallCross/> </NavLink>
//           </li>
//         </ul>
//       </nav>
//       </>
//   )
// }

// export default NoticesCategoriesNavigation