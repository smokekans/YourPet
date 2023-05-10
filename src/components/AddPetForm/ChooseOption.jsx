import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { petvalidationSchema } from '../../components/AddPetForm/Yup';

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

const ChooseOption = ({ nextStep, setCategory }) => {
  const [category, setCategoryLocal] = useState('');

  const navigate = useNavigate();

  const handleCategoryChange = event => {
    setCategoryLocal(event.target.value);
  };

  const handleNextClick = () => {
    setCategory(category);
    nextStep();
  };

  const handleCancelClick = () => {
    navigate(-1); // Повернення на попередню сторінку
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={petvalidationSchema}
        // onSubmit={handleSubmit}
      >
        <Form autoComplete="on">
          <label>
            Your pet
            <Field
              type="radio"
              name="category"
              value="your-pet"
              checked={category === 'your-pet'}
              onChange={handleCategoryChange}
            />
          </label>
          <label>
            Sell
            <Field
              type="radio"
              name="category"
              value="sell"
              checked={category === 'sell'}
              onChange={handleCategoryChange}
            />
          </label>
          <label>
            Lost/found
            <Field
              type="radio"
              name="category"
              value="lost-found"
              checked={category === 'lost-found'}
              onChange={handleCategoryChange}
            />
          </label>
          <label>
            In good hands
            <Field
              type="radio"
              name="category"
              value="good-hands"
              checked={category === 'good-hands'}
              onChange={handleCategoryChange}
            />
          </label>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
          <button
            type="button"
            disabled={category === ''}
            onClick={handleNextClick}
          >
            Next
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChooseOption;