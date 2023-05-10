// import AddPetForm from 'components/AddPetForm/AddPetForm';
import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { petvalidationSchema } from '../../components/AddPetForm/Yup';

import ChooseOption from "../../components/AddPetForm/ChooseOption";
import PersonalDetails from "../../components/AddPetForm/PersonalDetails";
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';


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

const AddPetPage = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const components = {
    1: (
      <ChooseOption
        nextStep={() => setStep(step + 1)}
        setCategory={setCategory}
      />
    ),
    2: (
      <PersonalDetails
        prevStep={() => setStep(step - 1)}
        nextStep={() => setStep(step + 1)}
        category={category}
      />
    ),
    3: (
      <MoreInfo
        prevStep={() => setStep(step - 1)}
        setTitle={setTitle}
        category={category}
      />
    ),
  };

  const getPageTitle = () => {
    const titles = {
      'your-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add to lost or found pet',
      'good-hands': 'Add to give a Pet for Adoption',
      '': 'Add Pet',
    };
    return titles[category] || 'Add Pet';
  };

  useEffect(() => {
    setTitle(getPageTitle());
  }, [category]);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step ${step <= step ? 'current' : 'completed'}`}
          >
            {step}
          </li>
        ))}
      </ul>
      {components[step]}
    </div>
  );
};

  // const MoreInfo = ({ prevStep, category }) => {
  // const [selectedSex, setSelectedSex] = useState('');
  //   const [petImage, setPetImage] = useState(null);
const MoreInfo = ({ prevStep, category }) => {
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [selectedSex, setSelectedSex] = useState('');
const [petImage, setPetImage] = useState(null);
  
  useEffect(() => {
  if (petImage) {
    const imageUrl = URL.createObjectURL(petImage);
    setPreviewImageUrl(imageUrl);
  }
  }, [petImage]);

  const handleSexSelect = event => {
    setSelectedSex(event.target.value);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    setPetImage(file);
  };
  
  const handlePrevClick = event => {
    event.preventDefault();
    prevStep();
  };

  const handleSubmit = event => {
    event.preventDefault();
    // TODO:  логіка для надсилання даних форми на сервер
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={petvalidationSchema}
        // onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
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
                    checked={selectedSex === 'female'}
                    onChange={handleSexSelect}
                  // hidden={true}
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
                    checked={selectedSex === 'male'}
                    onChange={handleSexSelect}
                  // hidden={true}
                  />
                  <span>
                    <BsGenderMale fill="#54ADFF" />
                  </span>
                  <p>Male</p>
                </label>
              </>
            )}
            {/* Load the pet’s image: */}
            <label htmlFor="pet-image">
               {!petImage ? (
                 <Field
                type="file"
                id="image"
                    name="image"
                    accept=".png, .jpg, .jpeg, .webp"
                    onChange={handleImageChange}
                    // hidden
                  />
              ) : (
                <>
                  <img
                    src={URL.createObjectURL(petImage)}
                    alt="Pet Preview"
                    style={{ maxWidth: '181px', maxHeight: '182px' }}
                    />
                    // TODO: видалити кнопку видалення
                  <button
                    onClick={() => {
                      setFieldValue('image', null);
                      setPetImage(null);
                    }}
                  >
                    <span>Remove Image</span>
                  </button>
                </>
              )}
                 
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
                <Field
                  placeholder="Type of price"
                  type="text"
                  name="price"
                />
                <ErrorMessage name="price" component="div" />
              </label>
            )}
            <label htmlFor="comments">
              Comments
              <textarea
                placeholder="Lorim is a friendly and outgoing dog that loves to meet new people and make new friends. He's playful and enjoys running around in the yard, playing fetch, and going for walks. Lorim is also a cuddly dog that loves to snuggle up with his humans and get belly rubs."
                name="comments"
              />
              <ErrorMessage name="comments" component="div" />
            </label>
            <button onClick={handlePrevClick}>Back</button>
          // TODO:disabled={ }
            <button type="submit">Done</button>
          </Form>
        )}
      </Formik>
    </div>
  );
  };
  
  export default AddPetPage;


   {/* <Field type="file" name="image" accept=".png, .jpg, .jpeg, .webp" onChange={handleImageChange} hidden
              // style={{ display: "none" }}
              // hidden={true}
              />
              <ErrorMessage name="pet-image" component="div" />
            </label> */}
            {/* <img
              id="preview-image"
              style={{ maxWidth: '181px', maxHeight: '182px' }}
              src={previewImageUrl}
            /> */}
