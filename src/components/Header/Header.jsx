import React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import Logo from 'components/Logo/Logo';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { NavLink as RouterLink } from 'react-router-dom';

function Header() {
  // const userIsLoggerIn = useSelector(getIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },

          // justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Stack component="nav" direction="row" spacing={2}>
          <Link
            href="/"
            component={RouterLink}
            to="/"
            underline="none"
            color="black"
            sx={{ ml: 2, mt: 4 }}
          >
            <Logo />
          </Link>
          <Box sx={{ ml: 20 }}>
            <Link
              href="/news"
              component={RouterLink}
              to="/news"
              underline="none"
              color="black"
              sx={{ mr: 5 }}
            >
              {'News'}
            </Link>
            <Link
              href="/notices/:categoryName"
              component={RouterLink}
              to="/notices/:categoryName"
              underline="none"
              color="red"
              sx={{ mr: 5 }}
            >
              {'Find pet'}
            </Link>
            <Link
              href="/friends"
              component={RouterLink}
              to="/friends"
              underline="none"
              color="black"
              sx={{ mr: 27 }}
            >
              {'Our friend'}
            </Link>
          </Box>

          <Button
            component={RouterLink}
            to="/login"
            variant="outlined"
            color="inherit"
            sx={{
              height: 40,
              width: 165,
              '&.active': {
                bgcolor: 'background.default',
                color: 'primary.main',
              },
            }}
          >
            Log IN
          </Button>
          <Button
            component={RouterLink}
            to="/register"
            variant="outlined"
            color="inherit"
            sx={{
              height: 40,
              width: 165,
              '&.active': {
                bgcolor: 'background.default',
                color: 'primary.main',
              },
            }}
          >
            Registration
          </Button>
        </Stack>
        {/* {userIsLoggerIn || userIsRefreshed ? <UserMenu /> : <Navigation />} */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
