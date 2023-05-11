import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import {
  Box,
  Divider,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

function MUITextField() {
  const ariaLabel = { 'aria-label': 'description' };
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="body1" align="center">
          Form props
        </Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </Box>
      <Typography variant="body1" align="center">
        Validation
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />

        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </Box>
      <Typography variant="body1" align="center">
        Multiline
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </Box>
      <Typography variant="body1" align="center">
        Select
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Box>
      <Typography variant="body1" align="center">
        Icons
      </Typography>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="With sx" variant="standard" />
        </Box>
      </Box>
      <Typography variant="body1" align="center">
        Input Adornments
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <TextField
          label="With normal TextField"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
          variant="filled"
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <FilledInput
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
          variant="standard"
        />
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <TextField
          label="Size"
          id="outlined-size-normal"
          defaultValue="Normal"
        />
        <TextField
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField
          label="Size"
          id="filled-size-normal"
          defaultValue="Normal"
          variant="filled"
        />
        <TextField
          label="Size"
          id="standard-size-small"
          defaultValue="Small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input defaultValue="Hello world" inputProps={ariaLabel} />
        <Input placeholder="Placeholder" inputProps={ariaLabel} />
        <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
        <Input defaultValue="Error" error inputProps={ariaLabel} />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Outlined secondary" color="secondary" focused />
        <TextField
          label="Filled success"
          variant="filled"
          color="success"
          focused
        />
        <TextField
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Для тих хто долистав до кінця"
            inputProps={{ 'aria-label': 'Для тих хто долистав до кінця' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: '10px' }}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
}

export default MUITextField;
