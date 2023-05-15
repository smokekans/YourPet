import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Container } from '@mui/material';
import ModalCongrats from 'components/Modal/ModalCongrats/ModalCongrats';
// import ModalCongrats from 'components/Modal/ModalCongrats/ModalCongrats';
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
import BasicModal from 'components/Modal/ModalCongrats/ModalCongrats';
// import {
//   // Typography,
//   FormControl,
//   FilledInput,
//   InputAdornment,
// } from '@mui/material';
// import { ReactComponent as PawPrint } from '../../images/icons/edit.svg';

function RegisterPage() {
  const dispatch = useDispatch();

  // на стор профілю
  const [isModalOpen, setIsModalOpen] = useState(false);
// на стор профілю
  
  const regValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Mail is required'),
    password: Yup.string()
      .required()
      .min(6)
      .max(16)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
        'Password must contain at least 1 UPPERCASE letter, 1 lowercase letter, and 1 number.'
      ),
    confirmPassword: Yup.string()
      .required('Fill the gap')
      .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
  });

  return (
    <>
      <Card sx={styles.root}>
         <CardContent sx={styles.box}>
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
            console.log(newUser);
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
                onSubmit={handleSubmit}>
                {/* <FormControl variant="filled">
            <FilledInput
              id="email"
              type='email'
              sx={styles.input}
              // onChange={ChangeData}
              // defaultValue={email}
              endAdornment={
                <InputAdornment position="end">
                  <PawPrint
                    className="email"
                    // onClick={handleClick}

                    edge="end"
                  ></PawPrint>
                </InputAdornment>
              }
            />
          </FormControl> */}
              <InputLabel htmlFor="email">
                <TextField
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

              <InputLabel htmlFor="passwordRepeat">
                <TextField
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                {/* {errors.password && touched.password && errors.password} */}
                <ErrorMessage component="div" name="confirmPassword" />
              </InputLabel>

              <Button variant="contained" sx={styles.button}
                type="submit"
                disabled={isSubmitting}

                // на стор профілю
                // onClick={() => {
                //   setIsModalOpen(!isModalOpen);
                // }}
                // на стор профілю

                >
                  Registration
                  {/* <BasicModal /> */}
  
              </Button>
              {
              // на стор профілю
              isModalOpen && (
                <ModalCongrats
                    onClick={() => {
                      setIsModalOpen(!isModalOpen);
                    }
                      // на стор профілю
                    }
                />
              )}
              <Box sx={styles.text}>
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
              </Box>
            </Box>
          )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
}

export default RegisterPage;
