import React from 'react';
import { Form, Field, ErrorMessage, useFormikContext } from 'formik';

const PersonalDetails = ({ prevStep, nextStep }) => {
  const { values, handleChange } = useFormikContext();
  const handlePrevClick = () => {
    prevStep();
  };

  const handleNextClick = () => {
    nextStep();
  };

  const { category } = values;

  return (
    <div>
      <Form autoComplete="on">
        {category !== 'your-pet' && (
          <label htmlFor="title">
            Title of add:
            <Field
              placeholder="Type title"
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
            />
            <ErrorMessage name="title" render={msg => <div> {msg} </div>} />
          </label>
        )}
        <label htmlFor="name">
          Name:
          <Field
            placeholder="Type name pet"
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          />
          <ErrorMessage name="name" render={msg => <div> {msg} </div>} />
        </label>
        <label htmlFor="birthday">
          Birthday:
          <Field
            placeholder="Type date of birth"
            type="text"
            id="birthday"
            name="birthday"
            // data-pattern="**.**.****"
            onChange={handleChange}
          />
          <ErrorMessage name="birthday" render={msg => <div> {msg} </div>} />
        </label>
        <label htmlFor="breed">
          Breed:
          <Field
            placeholder="Type breed"
            type="text"
            id="breed"
            name="breed"
            onChange={handleChange}
          />
          <ErrorMessage name="breed" render={msg => <div> {msg} </div>} />
        </label>
        <button type="button" onClick={handlePrevClick}>
          Back
        </button>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </Form>
    </div>
  );
};

export default PersonalDetails;
