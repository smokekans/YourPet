import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import { List, ListItem, Typography } from '@mui/material';
import styles from './styles';

function Nav() {
  return (
    <>
      <Box sx={styles.navContainer}>
        <List sx={styles.navList} component="ul">
          <ListItem sx={styles.navItem}>
            <Link
              href="/news"
              component={RouterLink}
              to="/news"
              underline="none"
              color="black"
              sx={{
                '&.active': {
                  color: '#FFC107',
                },
              }}
            >
              <Typography sx={styles.linkText}>News</Typography>
            </Link>
          </ListItem>

          <ListItem sx={styles.navItem}>
            <Link
              href="/notices/sell"
              component={RouterLink}
              to="/notices/sell"
              underline="none"
              color="black"
              sx={{
                '&.active': {
                  color: '#FFC107',
                },
              }}
            >
              <Typography sx={styles.linkText}>Find pet</Typography>
            </Link>
          </ListItem>

          <ListItem sx={styles.navItem}>
            <Link
              href="/friends"
              component={RouterLink}
              to="/friends"
              underline="none"
              color="black"
              sx={{
                '&.active': {
                  color: '#FFC107',
                },
              }}
            >
              <Typography sx={styles.linkText}>Our friend</Typography>
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default Nav;
