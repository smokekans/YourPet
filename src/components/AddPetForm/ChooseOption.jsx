import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Field, useFormikContext } from 'formik';

const ChooseOption = ({ nextStep, setTitle }) => {
  const navigate = useNavigate();
  const { values, handleChange } = useFormikContext();

  const categoryTitles = {
    'your-pet': 'Add my pet',
    sell: 'Add pet for sell',
    'lost-found': 'Add to lost or found pet',
    'for-free': 'Add to give a Pet for Adoption',
  };

  const handleCancelClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    nextStep();
    setTitle(categoryTitles[values.category]);
  };

  return (
    <div>
      <Form>
        <label htmlFor="category">
          Your pet
          <Field
            type="radio"
            id="your-pet"
            name="category"
            value="your-pet"
            onChange={handleChange}
            // hidden
          />
        </label>
        <label htmlFor="category">
          Sell
          <Field
            type="radio"
            id="sell"
            name="category"
            value="sell"
            onChange={handleChange}
            // hidden
          />
        </label>
        <label htmlFor="category">
          Lost/found
          <Field
            type="radio"
            id="lost-found"
            name="category"
            value="lost-found"
            onChange={handleChange}
            // hidden
          />
        </label>
        <label htmlFor="category">
          In good hands
          <Field
            type="radio"
            id="for-free"
            name="category"
            value="for-free"
            onChange={handleChange}
            // hidden
          />
        </label>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </Form>
    </div>
  );
};

export default ChooseOption;
