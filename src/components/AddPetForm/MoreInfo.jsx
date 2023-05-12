import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
// import { createPetCard } from 'redux/pets/petsOperation';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { PetvalidationSchema } from './Yup';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { ReactComponent as IconPlus } from '../../images/icons/plus.svg';

 const INITIAL_VALUES = {
    category: '',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: '',
    image: null,
    location: '',
    price: '',
    comments: '',
};
  
const MoreInfo = ({prevStep, category }) => {
  const [fileInput, setFileInput] = useState();
  const dispatch = useDispatch();

  const handleAddAvatar = (e) => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
    }
  };

  const handlePrevClick = () => {
    prevStep();
  };

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('category', values.category);
    formData.append('title', values.title);
    formData.append('name', values.name);
    formData.append('birthday', values.birthday);
    formData.append('breed', values.breed);
    formData.append('sex', values.sex);
    formData.append('image', fileInput);
    formData.append('location', values.location);
    formData.append('price', values.price);
    formData.append('comments', values.comments);
    // dispatch(createPetCard(formData));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={PetvalidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue}) => (
          <Form autoComplete="on">
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
                    checked={values.sex === 'female'}
                    // hidden
                  />
                  <span>
                    <BsGenderFemale fill="#F43F5E" />
                  </span>
                  <p>Female</p>
                </label>
                <label>
                  <Field
                    type="radio"
                    id="male"
                    name="sex"
                    value="male"
                    alt="male"
                    checked={values.sex === 'male'}
                    // hidden
                  />
                  <span>
                    <BsGenderMale fill="#54ADFF" />
                  </span>
                  <p>Male</p>
                </label>
              </>
            )}
            {/* <p></p> */}
            <label htmlFor="pet-image">
              Load the pet’s image:
              {fileInput ? (
                <img
                  id="image"
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
                id="pet-image"
                name="pet-image"
                accept=".png, .jpg, .jpeg, .webp"
                onChange={e => handleAddAvatar(e, setFieldValue)}
                hidden
              />
              <ErrorMessage name="pet-image" component="div" />
            </label>
            {category !== 'your-pet' && (
              <label htmlFor="location">
                Location
                <Field
                  placeholder="Type of location"
                  type="text"
                  name="location"
                />
                <ErrorMessage name="location" component="div" />
              </label>
            )}
            {category === 'sell' && (
              <label htmlFor="price">
                Price
                <Field placeholder="Type of price" type="text" name="price" />
                <ErrorMessage name="price" component="div" />
              </label>
            )}
            <label htmlFor="comments">
              Comments
              <textarea placeholder="Type comments" name="comments" />
              <ErrorMessage name="comments" component="div" />
            </label>
            <button onClick={handlePrevClick}>Back</button>
            <button type="submit">Done</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MoreInfo;


 // const handleSubmit = (values, { resetForm })=> {
  //   setFormData({
  //     ...values,
  //     image: fileInput,
  //   });
  //   resetForm();

  // };

// const INITIAL_VALUES = {
//   category: '',
//   name: '',
//   birthday: '',
//   breed: '',
//   file: null,
//   sex: '',
//   location: '',
//   price: '',
//   comments: '',
// };


  // const handleFormSubmit = async (values) => {
  //   try {
  //     const response = await fetch('/api/pets', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(values),
  //     });

  //     if (response.ok) {
  //       if (category === 'your-pet') {
  //         navigate('/user');
  //       } else {
  //         navigate('/notices');
  //       }
  //     } else {
  //       toast.error('An error occurred while creating the pet card.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('An error occurred while creating the pet card.');
  //   }
  // };