import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
// import { Container } from '@mui/material';
// import { toast } from 'react-toastify';
import styles from './styles';
import {
  Card,
  TextField,
  CardContent,
  Typography,
  Box,
  Button,
  InputLabel,
  FormHelperText,
} from '@mui/material';

function LoginPage() {
  const dispatch = useDispatch();
  const logValidationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Fill the gap')
      .email('Please enter an email')
      .max(254, 'Max 254'),
    password: Yup.string()
      .required('Fill the gap')
      .min(6, 'Enter more than 6 characters')
      .max(16, 'Max 16'),
  });

  return (
    <Card sx={styles.root}>
      <CardContent sx={styles.box}>
        <Typography sx={styles.title}>Login</Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={logValidationSchema}
          onSubmit={(values, { resetForm }) => {
            // console.log(values);
            dispatch(login(values));
            resetForm();
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              // autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Box sx={styles.component} >
                <InputLabel htmlFor="email" >
                  <TextField
                    // sx={styles.input}
                    // id="outlined-basic" variant="outlined"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {/* {errors.email && touched.email && errors.email} */}
                  <ErrorMessage component="div" name="email" />
                </InputLabel>

                <InputLabel htmlFor="password">
                  <TextField
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {/* {errors.password && touched.password && errors.password} */}
                  <ErrorMessage component="div" name="password" />
                </InputLabel>

                
              </Box>
              <Button variant="contained" sx={styles.button} type="submit" disabled={isSubmitting}>
                  Login
                </Button>
            </Box>
          )}
        </Formik>
        <Box sx={styles.text}>
          <Typography >Don't have an account?</Typography>
          <Link to="/register">Register</Link>
        </Box>
      </CardContent>
    </Card>
  );
}

export default LoginPage;
