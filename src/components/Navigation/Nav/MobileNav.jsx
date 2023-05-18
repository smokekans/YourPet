// import useMatchMedia from 'hooks/useMatchMedia';
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getAccessToken } from 'redux/auth/authSelectors';
// import BurgerMenu from './BurgerMenu/BurgerMenu';
// import UserNavigation from '../UserNavigation/UserNavigation';
// import AuthNavigation from '../AuthNavigation/AuthNavigation';
// import Nav from './Nav/Nav';

// function MobileNav() {
//   const { isMobile } = useMatchMedia();
//  const accessToken = useSelector(getAccessToken);
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <>
//       <BurgerMenu isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
//       {isOpen && (
//         <nav>
//           {isMobile && (
//             <div onClick={() => setOpen()}>
//               {accessToken ? <UserNavigation /> : <AuthNavigation />}
//             </div>
//           )}
//           <Nav />
//         </nav>
//       )}
//     </>
//   );
// }

// export default MobileNav;
