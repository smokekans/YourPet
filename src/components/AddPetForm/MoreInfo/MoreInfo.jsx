import React, { useState } from 'react';
import { Field, Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPet } from 'redux/pets/petsOperations';
import { createNotice } from 'redux/notices/noticesOperations';
import { getAccessToken } from 'redux/auth/authSelectors';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { ReactComponent as IconPlus } from '../../../images/icons/plus.svg';
import { ReactComponent as IconBack } from '../../../images/icons/arrow-left.svg';
import { ReactComponent as IconPaws } from '../../../images/icons/pawprint.svg';
import { Box, Button, styled, TextField } from '@mui/material';
import styles from './styles';
import { toast } from 'react-toastify';

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

const MoreInfo = ({ prevStep, setFormData }) => {
  const [fileInput, setFileInput] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(getAccessToken);

  const { values, handleChange, setFieldValue, handleBlur, errors, touched } =
    useFormikContext();

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
          createNotice({ values, accessToken, avatar: fileInput })
        );
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
    <Box sx={styles.more}>
      <Form autoComplete="on" onSubmit={onSubmit}>
        <Box sx={styles.primary}>
        {category !== 'your-pet' && (
           <>
            <p>The Sex</p>
            <label htmlFor="sex">
              <Field
                as={ValidationTextField}
                type="radio"
                id="female"
                name="sex"
                value="female"
                alt="female"
                hidden
                focused
                onBlur={handleBlur}
                error={!!(touched.sex && errors.sex)}
                helperText={touched.sex && errors.sex ? errors.sex : ' '}
                color={touched.sex && errors.sex ? 'error' : 'primary'}
              />
              <span>
                <BsGenderFemale fill="#F43F5E" />
              </span>
              <p>Female</p>
            </label>
            <label htmlFor="sex">
              <Field
                as={ValidationTextField}
                type="radio"
                id="male"
                name="sex"
                value="male"
                alt="male"
                hidden
                focused
                onBlur={handleBlur}
                error={!!(touched.sex && errors.sex)}
                helperText={touched.sex && errors.sex ? errors.sex : ' '}
                color={touched.sex && errors.sex ? 'error' : 'primary'}
              />
              <span>
                <BsGenderMale fill="#54ADFF" />
              </span>
              <p>Male</p>
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
            as={ValidationTextField}
            type="file"
            id="avatar"
            name="avatar"
            accept=".png, .jpg, .jpeg, .webp"
            onChange={event => {
              handleAddAvatar(event);
              handleChange(event);
            }}
            hidden
            focused
            onBlur={handleBlur}
            error={!!(touched.avatar && errors.avatar)}
            helperText={touched.avatar && errors.avatar ? errors.avatar : ' '}
            color={touched.avatar && errors.avatar ? 'error' : 'primary'}
          />
          </label>
        </Box>
        <Box sx={styles.second}>
        {category !== 'your-pet' && (
          <label htmlFor="location">
            Location
            <Field
              as={ValidationTextField}
              placeholder="Type of location"
              type="text"
              id="location"
              name="location"
              focused
              onBlur={handleBlur}
              error={!!(touched.location && errors.location)}
              helperText={
                touched.location && errors.location ? errors.location : ' '
              }
              color={touched.location && errors.location ? 'error' : 'primary'}
            />
          </label>
        )}
        {category === 'sell' && (
          <label htmlFor="price">
            Price
            <Field
              as={ValidationTextField}
              placeholder="Type of price"
              type="number"
              id="price"
              name="price"
              focused
              onBlur={handleBlur}
              error={!!(touched.price && errors.price)}
              helperText={touched.price && errors.price ? errors.price : ' '}
              color={touched.price && errors.price ? 'error' : 'primary'}
            />
          </label>
        )}
        <label htmlFor="comments">
          Comments
          <Field
            as={ValidationTextField}
            // as="textarea"
            placeholder="Type comments"
            id="comments"
            name="comments"
            focused
            onBlur={handleBlur}
            error={!!(touched.comments && errors.comments)}
            helperText={
              touched.comments && errors.comments ? errors.comments : ' '
            }
            color={touched.comments && errors.comments ? 'error' : 'primary'}
          />
        </label>
        <Button sx={styles.btn} onClick={handlePrevClick}>
          <IconBack />
          Back
        </Button>
        <Button
          sx={styles.button}
          type="submit"
          endIcon={<IconPaws fill="#FEF9F9" />}
        >
          Done
          </Button>
          </Box>
      </Form>
    </Box>
  );
};

export default MoreInfo;
