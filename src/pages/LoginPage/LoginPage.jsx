import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

function LoginPage() {
  // return <div>LoginPage</div>;
  const dispatch = useDispatch()
  const logValidationSchema = Yup.object().shape({
   email: Yup.string()
    .required("Fill the gap")
    .email("Please enter an email")
    .max(254, "Max 254"),
  password: Yup.string()
    .required("Fill the gap")
    .min(6, "Enter more than 6 characters")
    .max(16, "Max 16"),
    });
  
  return (
    <div>
      <h1>Login</h1>
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {/* {errors.email && touched.email && errors.email} */}
              <ErrorMessage component="div" name="email" />
            </label>

            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {/* {errors.password && touched.password && errors.password} */}
              <ErrorMessage component="div" name="password" />
            </label>

            <button type="submit" disabled={isSubmitting}>Login</button>
            <div>
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
