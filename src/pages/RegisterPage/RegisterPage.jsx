import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
// import isEmailValidator from 'validator/lib/isEmail';


function RegisterPage() {
    // return <div>RegisterPage</div>;
   const dispatch = useDispatch()
  
  const regValidationSchema = Yup.object().shape({
   email: Yup.string()
    .email("Invalid email format")
      .required("Mail is required"),
      // .test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmailValidator(value) : new Yup.ValidationError("Invalid value")),
  password: Yup.string()
    .required("Fill the gap")
    .min(6, "Enter more than 6 characters")
    .max(16, "Max 16"),
  confirmPassword: Yup.string()
    .required("Fill the gap")
    .oneOf([Yup.ref("password"), null], "Passwords have to be the same!"),
  });
  
  return (
    <div>
      <h1>Registration</h1>
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
         }
                  // console.log(values);
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

            <label htmlFor="passwordRepeat">
        
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {/* {errors.password && touched.password && errors.password} */}
              <ErrorMessage component="div" name="confirmPassword" />
            </label>

            <button type="submit" disabled={isSubmitting}>Registration</button>
            <div>
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterPage;
