import { Button, IconButton, SvgIcon } from '@mui/material';
import React from 'react';
import { ReactComponent as IconSearch } from '../../images/icons/cross.svg';
import { ReactComponent as StarIcon } from '../../images/icons/male.svg';

function MUIButtons() {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'accent.main',
          borderRadius: '50px',
          '&:hover': { backgroundColor: 'error.main' },
        }}
      >
        variant="contained"
      </Button>
      <Button variant="outlined">variant="outlined"</Button>
      <Button variant="text">variant="text"</Button>
      <br />
      <br />
      <Button variant="contained" size="small">
        size="small"
      </Button>
      <Button variant="contained" size="medium">
        size="small"
      </Button>
      <Button variant="contained" size="large">
        size="small"
      </Button>
      <br />
      <br />
      <Button variant="contained" color="inherit">
        color="inherit"
      </Button>
      <Button variant="contained" color="primary">
        color="primary"
      </Button>
      <Button variant="contained" color="warning">
        color="warning"
      </Button>
      <br />
      <Button variant="contained" color="success">
        color="success"
      </Button>
      <Button variant="contained" color="error">
        color="error"
      </Button>
      <Button variant="contained" color="info">
        color="info"
      </Button>
      <br />
      <br />
      <Button variant="outlined" color="inherit">
        color="inherit"
      </Button>
      <Button variant="outlined" color="primary">
        color="primary"
      </Button>
      <Button variant="outlined" color="warning">
        color="warning"
      </Button>
      <br />
      <Button variant="outlined" color="success">
        color="success"
      </Button>
      <Button variant="outlined" color="error">
        color="error"
      </Button>
      <Button variant="outlined" color="info">
        color="info"
      </Button>
      <br />
      <br />
      <Button variant="text" color="inherit">
        color="inherit"
      </Button>
      <Button variant="text" color="primary">
        color="primary"
      </Button>
      <Button variant="text" color="warning">
        color="warning"
      </Button>
      <br />
      <Button variant="text" color="success">
        color="success"
      </Button>
      <Button variant="text" color="error">
        color="error"
      </Button>
      <Button variant="text" color="info">
        color="info"
      </Button>
      <br />
      <br />
      <Button variant="contained" disableElevation>
        disableElevation
      </Button>
      <Button variant="contained" focusVisible>
        focusVisible
      </Button>
      <Button variant="contained" disabled>
        disabled
      </Button>
      <br />
      <br />
      <Button variant="contained" fullWidth>
        fullWidth
      </Button>
      <Button color="success">
        <IconSearch />
      </Button>
      <Button variant="contained" color="success" startIcon={<IconSearch />}>
        startIcon
      </Button>

      <Button variant="contained" color="success" endIcon={<IconSearch />}>
        endIcon
      </Button>
      <IconButton color="yellow" aria-label="close">
        <IconSearch />
        {/* <SvgIcon color="yellow">
          <path d="M19 5L5 19M5.00004 5L19 19" />
        </SvgIcon> */}
        <SvgIcon component={StarIcon} inheritViewBox />
      </IconButton>
      <IconButton aria-label="close" size="large">
        <IconSearch />
      </IconButton>
      <SvgIcon color="yellow">
        <path d="M19 5L5 19M5.00004 5L19 19" />
      </SvgIcon>
      <br />
      <br />
      <SvgIcon component={StarIcon} inheritViewBox />
    </>
  );
}

export default MUIButtons;
