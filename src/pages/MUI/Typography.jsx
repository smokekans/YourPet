import { Typography } from '@mui/material';
import React from 'react';

function MUITypography() {
  return (
    <>
      <Typography variant="body1">body1 = p</Typography>
      <Typography variant="body2">body2 = p</Typography>
      <Typography variant="caption">caption = span</Typography>
      <br></br>
      <Typography variant="button">button = = span</Typography>
      <Typography variant="h1" gutterBottom>
        variant="h1";
      </Typography>
      <Typography variant="caption" noWrap>
        with gutterBottom = margin-bottom: 0.35em;
      </Typography>
      <Typography variant="h1">variant="h1"</Typography>
      <Typography variant="h2">variant="h2"</Typography>
      <Typography variant="h3" paragraph>
        variant="h3"
      </Typography>
      <Typography variant="caption">
        with paragraph = margin-bottom: 16px;
      </Typography>
      <Typography variant="subtitle1">subtitle1 = h6</Typography>
      <Typography variant="subtitle2">subtitle2 = h6</Typography>
      <Typography variant="overline">overline = span & uppercase</Typography>
      <br></br>
      <Typography variant="inherit">
        variant="inherit" inherit = p (h1)"
      </Typography>
      <Typography variant="inherit" component="h1">
        variant="inherit" component="h1" " (h1) class="MuiTypography-root
        MuiTypography-inherit css-d1j16j-MuiTypography-root"(h1) "
      </Typography>
      <Typography variant="inherit" color="accent.main" align="center">
        color="accent.main" align='center'
      </Typography>
      <Typography variant="inherit" color="success.main" align="left">
        color="success.main" align="left"
      </Typography>
      <Typography variant="inherit" color="error.main" align="right">
        color="error.main" align="right"
      </Typography>
      <Typography variant="inherit" color="text.primary" align="justify">
        color="text.dark" align="justify" = text-align: justify;
      </Typography>
      <Typography>
        h1: 'h1',<br></br> h2: 'h2',<br></br> h3: 'h3',<br></br> h4: 'h4',
        <br></br> h5: 'h5',<br></br> h6: 'h6',<br></br> subtitle1: 'h6',
        <br></br> subtitle2: 'h6',<br></br> body1: 'p',<br></br> body2: 'p',
        <br></br> inherit: 'p'
      </Typography>
    </>
  );
}

export default MUITypography;
