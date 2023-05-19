import React, { useState } from 'react';
import { Field, ErrorMessage, Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPet } from 'redux/pets/petsOperation';
import { createNotice } from 'redux/notices/noticesOperation';
import { getAccessToken } from 'redux/auth/authSelectors';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { ReactComponent as IconPlus } from '../../../images/icons/plus.svg';
import { ReactComponent as IconBack } from '../../../images/icons/arrow-left.svg';
import { ReactComponent as IconPaws } from '../../../images/icons/pawprint.svg';
import { Box, Button, IconButton, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import styles from './styles';
import { toast } from 'react-toastify';

const MoreInfo = ({ prevStep, setFormData }) => {
  const [fileInput, setFileInput] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(getAccessToken);

  const { values, handleChange, setFieldValue } = useFormikContext();

  const handleAddAvatar = e => {
    const file = e.target.files[0];
    if (file) {
      setFileInput(file);
      setFieldValue('avatar', file);
      setFormData(values => ({ ...values, avatar: file }));
    }
  };

  const handlePrevClick = () => {
    prevStep();
  };

  const onSubmit = async ({ resetForm }) => {
    setFormData({ ...values, avatar: fileInput });
    if (values.category === 'your-pet') {
      try {
        await dispatch(createPet({ values, accessToken, avatar: fileInput }));
        toast.success('Pet card created successfully');
        navigate('/user');
        resetForm();
      } catch (error) {
        toast.error(`Error creating pet card: ${error.message}`);
      }
    } else {
      try {
        await dispatch(
        createNotice({ values, accessToken, avatar: fileInput }));
        toast.success('Notice created successfully');
        navigate('/notices/sell');
        resetForm();
      } catch (error) {
        toast.error(`Error creating notice: ${error.message}`);
      }
    }
  };

  const { category } = values;
  return (
    <div>
      <Form autoComplete="on" onSubmit={onSubmit}>
        {category !== 'your-pet' && (
          <>
            <p>The Sex</p>
            <label htmlFor="sex">
              <Field
                type="radio"
                id="female"
                name="sex"
                value="female"
                alt="female"
                hidden
              />
              <span>
                <BsGenderFemale fill="#F43F5E" />
              </span>
              <p>Female</p>
              <ErrorMessage name="sex" render={msg => <div> {msg} </div>} />
            </label>
            <label htmlFor="sex">
              <Field
                type="radio"
                id="male"
                name="sex"
                value="male"
                alt="male"
                hidden
              />
              <span>
                <BsGenderMale fill="#54ADFF" />
              </span>
              <p>Male</p>
              <ErrorMessage name="sex" render={msg => <div> {msg} </div>} />
            </label>
          </>
        )}
        <label htmlFor="avatar">
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
            id="avatar"
            name="avatar"
            accept=".png, .jpg, .jpeg, .webp"
            onChange={event => {
              handleAddAvatar(event);
              handleChange(event);
            }}
            hidden
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
        <Button sx={styles.btn} onClick={handlePrevClick}>
           <IconBack/>
          Back
        </Button>
        <Button  sx={styles.button} type="submit" endIcon={<IconPaws fill="#FEF9F9" />}>
          Done</Button>
      </Form>
    </div>
  );
};

export default MoreInfo;
