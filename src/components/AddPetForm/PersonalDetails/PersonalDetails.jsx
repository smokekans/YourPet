import React from 'react';
import { Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { ReactComponent as IconBack } from '../../../images/icons/arrow-left.svg';
import { ReactComponent as IconPaws } from '../../../images/icons/pawprint.svg';
import { Box, Button } from '@mui/material';
import styles from './styles';

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
   <Box>
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
        <Button sx={styles.btn} type="button" onClick={handlePrevClick}>
          <IconBack/>
          Back
        </Button>
        <Button  sx={styles.button} type="button" onClick={handleNextClick} endIcon={<IconPaws fill="#FEF9F9" />}>
          Next
        </Button>
      </Form>
    </Box>
  );
};

export default PersonalDetails;
