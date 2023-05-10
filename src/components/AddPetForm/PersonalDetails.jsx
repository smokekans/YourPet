import React  from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { petvalidationSchema } from './Yup';

const INITIAL_VALUES = {
  category: '',
  name: '',
  birthday: '',
  breed: '',
  file: null,
  sex: '',
  location: '',
  price: '',
  comments: '',
};

const PersonalDetails = ({ prevStep, nextStep, category }) => {
  const handleNextClick = () => {
    nextStep();
  };

  const handlePrevClick = () => {
    prevStep();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={petvalidationSchema}
      >
        <Form autoComplete="on">
          {category !== 'your-pet' && (
            <label htmlFor="title">
              Title of add:
              <Field placeholder="Type name pet" type="text" name="title" />
              <ErrorMessage name="title" component="div" />
            </label>
          )}
          <label htmlFor="name">
            Name:
            <Field placeholder="Type name pet" type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="birthday">
            Birthday:
            <Field
              placeholder="Type date of birth"
              type="text"
              name="birthday"
            />
            <ErrorMessage name="birthday" component="div" />
          </label>
          <label htmlFor="breed">
            Breed:
            <Field placeholder="Type breed" type="text" name="breed" />
            <ErrorMessage name="breed" component="div" />
          </label>
          <button onClick={handlePrevClick}>Back</button>
          // TODO:disabled={}
          <button onClick={handleNextClick}>Next</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalDetails;