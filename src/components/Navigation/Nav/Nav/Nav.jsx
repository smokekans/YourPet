import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import { List, ListItem } from '@mui/material';
import styles from './styles';

function Nav() {
  return (
    <>
      <Box sx={styles.navContainer}>
        <List sx={styles.navList} component="ul">
          <ListItem sx={styles.navItem}>
            <Link component={RouterLink} to="/news" sx={styles.link} underline="none">
              News
            </Link>
          </ListItem>

          <ListItem sx={styles.navItem}>
            <Link component={RouterLink} to="/notices/sell" underline="none" sx={styles.link}>
              Find pet
            </Link>
          </ListItem>

          <ListItem sx={styles.navItem}>
            <Link component={RouterLink} to="/friends" underline="none" sx={styles.link}>
              Our friend
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default Nav;
