import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { Container } from '@mui/material';
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

function LoginPage() {
  const dispatch = useDispatch();
  const logValidationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Fill the gap')
      .email('Enter a valid Email')
      .max(254, 'Max 254'),
    password: Yup.string()
      .required('Fill the gap')
      .min(6, 'Enter more than 6 characters')
      .max(16, 'Max 16')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
        'Password must contain at least 1 UPPERCASE letter, 1 lowercase letter, and 1 number.'
      )
      .test('strongPassword', 'Password is secure', value => {
        // Валідація надійного пароля
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/.test(value);
      }),
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Card sx={styles.root}>
        <Typography sx={styles.title}>Login</Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={logValidationSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(login(values));
            resetForm();
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
            <Form
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              onSubmit={handleSubmit}
            >
              <div>
                <Field
                  as={TextField}
                  // sx={styles.input}
                  // id="outlined-basic"
                  // variant="outlined"
                  type="email"
                  name="email"
                  placeholder="Email"
                  fullWidth
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={!!(touched.email && errors.email)}
                  helperText={<ErrorMessage name="email" />}
                  value={values.email}
                />
                <Field
                  as={TextField}
                  name="password"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  value={values.password}
                  // error={touched.password !== true|| errors.password !== true}
                  helperText={
                    touched.password !== true || errors.password !== true ? (
                      <ErrorMessage name="password" />
                    ) : (
                      'Password is secure'
                    )
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <Button
                variant="contained"
                sx={styles.button}
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Box sx={styles.text}>
          <Typography>Don't have an account?</Typography>
          <Link to="/register">Register</Link>
        </Box>
        <a href="https://yourpet-backend.onrender.com/api/auth/google">
          Google
        </a>
      </Card>
    </Container>
  );
}

export default LoginPage;
