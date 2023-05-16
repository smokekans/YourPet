import React, { useState } from 'react';
import { Field, ErrorMessage, Form, useFormikContext } from 'formik';
// import { petsValidationSchema } from './Yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPet } from 'redux/pets/petsOperation';
import { createNotice } from 'redux/notices/noticesOperation';
import { getToken } from 'redux/auth/authSelectors';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { ReactComponent as IconPlus } from '../../images/icons/plus.svg';
import { toast } from 'react-toastify';

const MoreInfo = ({ prevStep, formData, setFormData }) => {
  const [fileInput, setFileInput] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);

  const {
    // values,
    handleChange,
    // handleSubmit,
    setFieldValue,
  } = useFormikContext();

  const handleAddAvatar = e => {
    if (e.target.files[0]) {
      setFileInput(e.target.files[0]);
      setFieldValue('image', e.target.files[0]);
    }
  };

  const handlePrevClick = () => {
    prevStep();
  };

  const onSubmit = async values => {
    console.log(values);
    setFormData(values);
    if (values.category === 'your-pet') {
      try {
        await dispatch(createPet({ values, token }));
        toast.success('Pet card created successfully');
        navigate('/user');
      } catch (error) {
        toast.error(`Error creating pet card: ${error.message}`);
      }
    } else {
      try {
        await dispatch(createNotice({ values, token, image: fileInput }));
        toast.success('Notice created successfully');
        navigate('/notices/sell');
      } catch (error) {
        toast.error(`Error creating notice: ${error.message}`);
      }
    }
    console.log(formData);
  };

  const { category } = formData;

  return (
    <div>
      <Form autoComplete="on" onSubmit={onSubmit}>
        {category !== 'your-pet' && (
          <>
            <p>The Sex</p>
            <label>
              <Field
                type="radio"
                id="female"
                name="sex"
                value="female"
                alt="female"
                // hidden
              />
              <span>
                <BsGenderFemale fill="#F43F5E" />
              </span>
              <p>Female</p>
              <ErrorMessage name="sex" render={msg => <div> {msg} </div>} />
            </label>
            <label>
              <Field
                type="radio"
                id="male"
                name="sex"
                value="male"
                alt="male"
                // hidden
              />
              <span>
                <BsGenderMale fill="#54ADFF" />
              </span>
              <p>Male</p>
              <ErrorMessage name="sex" render={msg => <div> {msg} </div>} />
            </label>
          </>
        )}
        <label htmlFor="image">
          Load the pet’s image:
          {fileInput ? (
            <img
              src={URL.createObjectURL(fileInput)}
              alt={fileInput.name}
              width="182px"
              height="182px"
            />
          ) : (
            <IconPlus />
          )}
          <Field
            type="file"
            id="image"
            name="image"
            accept=".png, .jpg, .jpeg, .webp"
            // onChange={handleAddAvatar}
            onChange={event => {
              handleAddAvatar(event);
              handleChange(event);
            }}
          />
          <ErrorMessage name="image" render={msg => <div> {msg} </div>} />
        </label>
        {category !== 'your-pet' && (
          <label htmlFor="location">
            Location
            <Field
              placeholder="Type of location"
              type="text"
              id="location"
              name="location"
            />
            <ErrorMessage name="location" render={msg => <div> {msg} </div>} />
          </label>
        )}
        {category === 'sell' && (
          <label htmlFor="price">
            Price
            <Field
              placeholder="Type of price"
              type="number"
              id="price"
              name="price"
            />
            <ErrorMessage name="price" render={msg => <div> {msg} </div>} />
          </label>
        )}
        <label htmlFor="comments">
          Comments
          <Field
            as="textarea"
            placeholder="Type comments"
            id="comments"
            name="comments"
          />
          <ErrorMessage name="comments" render={msg => <div> {msg} </div>} />
        </label>
        <button onClick={handlePrevClick}>Back</button>
        <button type="submit">Done</button>
      </Form>
    </div>
  );
};
export default MoreInfo;

// const handleAddAvatar = e => {
//   if (e.target.files[0]) {
//     setFileInput(e.target.files[0]);
//     setFormData({ ...formData, image: e.target.files[0] });
//   }
// };

// const handleSubmit = async values => {
//   setFormData({
//     ...values,
//     image: fileInput,
//   });
//   if (values.category === 'your-pet') {
//     try {
//       dispatch(createPet({ values, token, image: fileInput }));
//       toast.success('Pet card created successfully');
//       navigate('/user');
//     } catch (error) {
//       toast.error(`Error creating pet card: ${error.message}`);
//     }
//   } else {
//     try {
//       dispatch(createNotice({ values, token }));
//       toast.success('Notice created successfully');
//       navigate('/notices/sell');
//     } catch (error) {
//       toast.error(`Error creating notice: ${error.message}`);
//     }
//   }
//   console.log(formData);
// };
