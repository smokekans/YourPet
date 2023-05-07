import { createTheme } from '@mui/material';

// :hover
// 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)';
// вписувати напряму в елемент sx={{ background: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)', }}

const theme = createTheme({
  palette: {
    background: {
      default: '#CCCCCC',
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
  ],
  // boxShadow: 1,
  // boxShadow: 2,
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
});

export default theme;

// <Box
//   sx={{
//     bgcolor: 'background.paper',
//     boxShadow: 1,
//     borderRadius: 1,
//     p: 2,
//     minWidth: 300,
//   }}
// >
//   <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
//   <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
//     98.3 K
//   </Box>
//   <Box
//     component={TrendingUpIcon}
//     sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
//   />
//   <Box
//     sx={{
//       color: 'success.dark',
//       display: 'inline',
//       fontWeight: 'medium',
//       mx: 0.5,
//     }}
//   >
//     18.77%
//   </Box>
//   <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
//     vs. last week
//   </Box>
// </Box>;

//  <Box
//    sx={{
//      display: 'flex',
//      flexDirection: { xs: 'column', md: 'row' },
//      alignItems: 'center',
//      bgcolor: 'background.paper',
//      overflow: 'hidden',
//      borderRadius: '12px',
//      boxShadow: 1,
//      fontWeight: 'bold',
//    }}
//  >
//    <Box
//      component="img"
//      sx={{
//        height: 233,
//        width: 350,
//        maxHeight: { xs: 233, md: 167 },
//        maxWidth: { xs: 350, md: 250 },
//      }}
//      alt="The house from the offer."
//      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
//    />
//    <Box
//      sx={{
//        display: 'flex',
//        flexDirection: 'column',
//        alignItems: { xs: 'center', md: 'flex-start' },
//        m: 3,
//        minWidth: { md: 350 },
//      }}
//    >
//      <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
//        123 Main St, Phoenix AZ
//      </Box>
//      <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
//        $280,000 — $310,000
//      </Box>
//      <Box
//        sx={{
//          mt: 1.5,
//          p: 0.5,
//          backgroundColor: theme => alpha(theme.palette.primary.main, 0.1),
//          borderRadius: '5px',
//          color: 'primary.main',
//          fontWeight: 'medium',
//          display: 'flex',
//          fontSize: 12,
//          alignItems: 'center',
//          '& svg': {
//            fontSize: 21,
//            mr: 0.5,
//          },
//        }}
//      >
//        <ErrorOutlineIcon />
//        CONFIDENCE SCORE 85%
//      </Box>
//    </Box>
//  </Box>;
