import React from 'react';
import { Form, Field, useFormikContext } from 'formik';
import { ReactComponent as IconBack } from '../../../images/icons/arrow-left.svg';
import { ReactComponent as IconPaws } from '../../../images/icons/pawprint.svg';
import { Box, styled, TextField, Button } from '@mui/material';
import styles from './styles';

const ValidationTextField = styled(TextField)({
  '& .MuiInputBase-root.MuiOutlinedInput-root': {
    borderRadius: '40px',
    color: '#888888',
    height: '48px',
    width: '264px',
    '@media (min-width: 768px)': { width: '394px' },
  },
  '& .MuiFormHelperText-root': {
    color: '#54ADFF',
  },
});

const PersonalDetails = ({ prevStep, nextStep }) => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext();
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
              as={ValidationTextField}
              placeholder="Type title"
              type="text"
              id="title"
              name="title"
              focused
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.title && errors.title)}
              helperText={touched.title && errors.title ? errors.title : ' '}
              color={
                touched.title && errors.title
                  ? 'error'
                  : 'primary'
              }
            />
          </label>
        )}
        <label htmlFor="name">
          Name:
          <Field
            as={ValidationTextField}
            placeholder="Type name pet"
            type="text"
            focused
            id="name"
            name="name"
            onChange={handleChange}
             onBlur={handleBlur}
              error={!!(touched.name && errors.name)}
              helperText={touched.name && errors.name ? errors.name : ' '}
              color={
                touched.name && errors.name
                  ? 'error'
                  : 'primary'
              }
            />
        </label>
        <label htmlFor="birthday">
          Birthday:
          <Field
            as={ValidationTextField}
            placeholder="Type date of birth"
            type="text"
            focused
            id="birthday"
            name="birthday"
            // data-pattern="**.**.****"
            onChange={handleChange}
             onBlur={handleBlur}
              error={!!(touched.birthday && errors.birthday)}
              helperText={touched.birthday && errors.birthday ? errors.birthday : ' '}
              color={
                touched.birthday && errors.birthday
                  ? 'error'
                  : 'primary'
              }
            />
        </label>
        <label htmlFor="breed">
          Breed:
          <Field
            as={ValidationTextField}
            placeholder="Type breed"
            type="text"
            focused
            id="breed"
            name="breed"
            onChange={handleChange}
             onBlur={handleBlur}
              error={!!(touched.breed && errors.breed)}
              helperText={touched.breed && errors.breed ? errors.breed : ' '}
              color={
                touched.breed && errors.breed
                  ? 'error'
                  : 'primary'
              }
            />
        </label>
        <Button sx={styles.btn} type="button" onClick={handlePrevClick}>
          <IconBack />
          Back
        </Button>
        <Button
          sx={styles.button}
          type="button"
          onClick={handleNextClick}
          endIcon={<IconPaws fill="#FEF9F9" />}
        >
          Next
        </Button>
      </Form>
    </Box>
  );
};

export default PersonalDetails;
