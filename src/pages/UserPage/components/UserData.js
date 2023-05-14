import { ThemeProvider } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import theme from '../../../theme';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import { flexbox } from '@mui/system';

export default function UserData() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ displayFlex: flexbox, flexDirection: 'column' }}>
          <div>
            <Typography
              sx={{
                width: 207,
                height: 38,
                left: 17,
                top: 10,
                color: 'text.color',
                fontFamily: 'Manrope',

                fontWeight: 500,
                fontSize: 28,
                lineHeight: 38,
              }}
              component="h2"
            >
              My information:
            </Typography>

            <Avatar alt="Avatar" src="" sx={{ width: 44, height: 44 }} />
            <Typography
              sx={{
                color: 'text.color',
                fontFamily: 'Manrope',
              }}
              component="h2"
            >
              Name:
            </Typography>
            <TextField id="outlined-basic" label="name" variant="outlined" />
            <Typography
              sx={{
                color: 'text.color',
                fontFamily: 'Manrope',
              }}
              component="h2"
            >
              Email:
            </Typography>
            <TextField id="outlined-basic" label="email" />
            <Typography
              sx={{
                color: 'text.color',
                fontFamily: 'Manrope',
              }}
              component="h2"
            >
              Birthday:
            </Typography>
            <TextField
              id="outlined-basic"
              label="Birthday"
              sx={{
                '& .MuiFilledInput-root': {
                  border: '1px solid #e2e2e1',
                  borderRadius: 20,
                },
              }}
            />
            <Typography
              sx={{
                color: 'text.color',
                fontFamily: 'Manrope',
              }}
              component="h2"
            >
              Phone:
            </Typography>
            <TextField id="outlined-basic" label="Phone" />
            <Typography
              sx={{
                color: 'text.color',
                fontFamily: 'Manrope',
              }}
              component="h2"
            >
              City:
            </Typography>
            <TextField id="outlined-basic" label="City" />
            <Box
              sx={{
                width: 182,
                height: 182,
                left: 123,
                top: 212,

                borderRadius: 40,
              }}
              alt=""
            />
            <input type="file" />
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
}
