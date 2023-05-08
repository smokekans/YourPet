import React from 'react';
import { NavLink as Routerlink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

function Nav() {
  return (
    <Box>
      <Link
        href="/news"
        component={Routerlink}
        to="/news"
        underline="none"
        color="black"
        sx={{ mr: 5, ml: 20 }}
      >
        {'News'}
      </Link>
      <Link
        href="/notices/:categoryName"
        component={Routerlink}
        to="/notices/:categoryName"
        underline="none"
        color="black"
        sx={{ mr: 5 }}
      >
        {'Find pet'}
      </Link>
      <Link
        href="/friends"
        component={Routerlink}
        to="/friends"
        underline="none"
        color="black"
        sx={{ mr: 27 }}
      >
        {'Our friend'}
      </Link>
    </Box>
  );
}

export default Nav;

//   const itemsNav = [
//     { href: '/news', title: 'News' },
//     { href: '/notices/:categoryName', title: 'Find pet' },
//     { href: '/friends', title: 'Our friends' },
//   ];

//   return (
//     <nav>
//       <ul>
//         {
//           <li>
//             {itemsNav.map(({ href, title }) => (
//               <NavLink to={href} key={title}>
//                 {title}
//               </NavLink>
//             ))}
//           </li>
//         }
//       </ul>
//     </nav>
//   );
