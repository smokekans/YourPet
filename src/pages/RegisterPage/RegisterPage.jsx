import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Container, styled, SvgIcon } from '@mui/material';
import styles from './styles';
import {
  Card,
  TextField,
  Typography,
  Box,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ReactComponent as IconGoogle } from '../../images/icons/google-icon.svg';
import { ReactComponent as IconClose } from '../../images/icons/cross-small-red.svg';
import { ReactComponent as IconCheck } from '../../images/icons/check.svg';

const ValidationTextField = styled(TextField)({
  '& .MuiInputBase-root.MuiOutlinedInput-root': {
    borderRadius: '40px',
    color: '#888888',
  },
  '& .MuiFormHelperText-root': {
    color: '#00C3AD',
  },
});

function RegisterPage() {
  const dispatch = useDispatch();
  const regValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid Email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Enter more than 6 characters')
      .max(16, 'Max 16')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
        'Enter a strong password'
      ),
    confirmPassword: Yup.string()
      .required('Confirm your password')
      .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [pass, setPass] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = event => {
    const { value } = event.target;
    const isValidPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/.test(value);
    setIsPasswordSecure(isValidPassword);
    setPass(value)
  };

  const handleConfirmPasswordChange = event => {
    const { value } = event.target;
      setIsConfirmPassword(value === pass);
  
  };

  const handleEmailChange = event => {
    const { value } = event.target;
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      value
    );
    setIsEmailValid(isValidEmail);
  };

  return (
    <Container sx={styles.image}>
      <Card sx={styles.root}>
        <Typography sx={styles.title}>Registration</Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={regValidationSchema}
          onSubmit={(values, { resetForm }) => {
            const newUser = {
              email: values.email,
              password: values.password,
            };
            dispatch(register(newUser));
            resetForm();
            setIsPasswordSecure(false)
            setIsEmailValid(false)
            setIsConfirmPassword(false)
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                as={ValidationTextField}
                type="email"
                name="email"
                placeholder="Email"
                fullWidth
                focused
                margin="dense"
                variant="outlined"
                onChange={event => {
                  handleChange(event);
                  handleEmailChange(event);
                }}
                onBlur={handleBlur}
                error={!!(touched.email && errors.email)}
                helperText={
                  touched.email && errors.email ? (
                    <ErrorMessage name="email" />
                  ) : isEmailValid ? (
                    'Email is valid'
                  ) : (
                    ' '
                  )
                }
                value={values.email}
                InputProps={{
                  color:
                    touched.email && errors.email
                      ? 'error'
                      : isEmailValid
                      ? 'success'
                      : 'primary',
                  endAdornment: (
                    <InputAdornment position="end">
                      {touched.email && errors.email ? (
                        <IconClose />
                      ) : isEmailValid ? (
                        <IconCheck stroke="#00C3AD" />
                      ) : null}
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                as={ValidationTextField}
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                focused
                margin="dense"
                variant="outlined"
                onChange={event => {
                  handleChange(event);
                  handlePasswordChange(event);
                }}
                onBlur={handleBlur}
                value={values.password}
                error={!!(touched.password && errors.password)}
                helperText={
                  touched.password && errors.password ? (
                    <ErrorMessage name="password" />
                  ) : isPasswordSecure ? (
                    'Password is secure'
                  ) : (
                    ' '
                  )
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {touched.password && errors.password ? (
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ) : isPasswordSecure ? (
                        <IconCheck stroke="#00C3AD" />
                      ) : (
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
                color={
                  touched.password && errors.password
                    ? 'error'
                    : isPasswordSecure
                    ? 'success'
                    : 'primary'
                }
              />
              <Field
                as={ValidationTextField}
                name="confirmPassword"
                placeholder="Confirm password"
                type={showConfirmPassword ? 'text' : 'password'}
                fullWidth
                focused
                margin="dense"
                variant="outlined"
                onChange={event => {
                  handleChange(event);
                  handleConfirmPasswordChange(event);
                }}
                onBlur={handleBlur}
                value={values.confirmPassword}
                error={!!(touched.confirmPassword && errors.confirmPassword)}
                helperText={
                   touched.confirmPassword && errors.confirmPassword ? (
    <ErrorMessage name="confirmPassword" />
  ) : isConfirmPassword ? (
    'Passwords match'
  ) : (
    ' '
  )
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {touched.confirmPassword && errors.confirmPassword ? (
                        <IconButton
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      ) : isConfirmPassword ? (
                        <IconCheck stroke="#00C3AD" />
                      ) : (
                        <IconButton
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
                color={
                  touched.confirmPassword && errors.confirmPassword
                    ? 'error'
                    : isConfirmPassword
                    ? 'success'
                    : 'primary'
                }
              />
              <Button
                variant="contained"
                sx={styles.button}
                type="submit"
                disabled={isSubmitting}
              >
                Registration
              </Button>
            </Form>
          )}
        </Formik>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography component="p" sx={styles.text}>
            Already have an account?{' '}
            <Link to="/login">
              <Typography component="span" sx={styles.linkT}>
                Login
              </Typography>
            </Link>
          </Typography>
          <Typography
            component="a"
            href="https://yourpet-backend.onrender.com/api/auth/google"
            sx={styles.textLink}
          >
            Register with &nbsp;&nbsp;
            <SvgIcon width="24px" height="24px" inheritViewBox>
              <IconGoogle />
            </SvgIcon>
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}

export default RegisterPage;