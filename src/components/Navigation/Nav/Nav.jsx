import React from 'react';
import { NavLink as Routerlink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import { List, ListItem } from '@mui/material';

function Nav() {
  return (
    <>
      <Box>
        <List
          component="ul"
          sx={{
            gap: '20px',
            display: 'flex',
          }}
        >
          <ListItem color="black" sx={{ width: 'auto' }}>
            <Link
              href="/news"
              component={Routerlink}
              to="/news"
              underline="none"
            >
              News
            </Link>
          </ListItem>
          <ListItem sx={{ width: 'auto' }}>
            <Link
              href="/notices/sell"
              component={Routerlink}
              to="/notices/sell"
              underline="none"
              color="black"
            >
              Find pet
            </Link>
          </ListItem>

          <ListItem sx={{ width: 'auto' }}>
            <Link
              href="/friends"
              component={Routerlink}
              to="/friends"
              underline="none"
              color="black"
            >
              Our friend
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
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
