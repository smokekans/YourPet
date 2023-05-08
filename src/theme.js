import { createTheme } from '@mui/material';

// :hover
// 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)';
// вписувати напряму в елемент sx={{ background: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)', }}

const theme = createTheme({
  palette: {
    background: {
      default: '#FEF9F9',
    },
    text: {
      primary: '#111111', //чорний
      secondary: '#54ADFF', //синій
      dark: '#888888', //сірий
      light: '#FDF7F2', //білий
    },
    primary: {
      main: '#54ADFF', //темносиній
      secondary: '#CCE4FB', //світлосиній
      contrastText: '#FDF7F2', // білий
    },
    accent: {
      main: '#FFC107', //жовтий
    },
    error: {
      main: '#F43F5E', //червоний
    },
    success: {
      main: '#00C3AD', //зелений
    },
    action: {
      active: '#777777', //активна
      disabled: '#331188', //непрацююча
      selected: 'rgba(140, 200, 253, 0.44)', //неактивна
      hover: '#000000',
    },
  },
  shadows: [
    'none',
    '3px 8px 14px 0px #88C6FD30',
    '7px 13px 14px 0px #74B1E83D',
    '9px 17px 18px 0px #74B1E83D',
  ],
  typography: {
    fontFamily: 'Manrope, Inter',
    h1: {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.375,
    },
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
  },
  shadows: [
    "none",
    '3px 8px 14px rgba(136, 198, 253, 0.19)',
    '7px 13px 14px rgba(116, 177, 232, 0.24)',
  ],
});

export default theme;
