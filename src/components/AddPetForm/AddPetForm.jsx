import React, {useState} from 'react';
import { Formik } from 'formik';
// import { petsValidationSchema } from './Yup';
import ChooseOption from './ChooseOption';
import PersonalDetails from './PersonalDetails';
import MoreInfo from './MoreInfo';
import { Container, Typography } from '@mui/material';


const AddPetForm = () => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('Add Pet');
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: '',
    avatar: '',
    location: '',
    price: '',
    comments: '',
  });

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const components = {
    1: (
      <ChooseOption
        nextStep={() => setStep(step + 1)}
        setTitle={setTitle}
      />
    ),
    2: (
      <PersonalDetails
        prevStep={() => setStep(step - 1)}
        nextStep={() => setStep(step + 1)}
      />
    ),
    3: (
      <MoreInfo
        prevStep={() => setStep(step - 1)}
        setFormData={setFormData}
      />
    ),
  };

  return (
   <Container maxWidth="sm">
       <Typography variant="h4" align="center" color="textPrimary" gutterBottom>{step > 1 ? title : 'Add Pet'}</Typography>
      <Formik
        initialValues={formData}
        // validationSchema={petsValidationSchema}
      >
        <div>
          <ul>
            {steps.map((stepName, index) => (
              <li
                key={index}
                className={`step ${stepName <= step ? 'current' : 'completed'}`}
              >
                {stepName}
              </li>
            ))}
          </ul>
          {components[step]}
        </div>
      </Formik>
       </Container>
  );
};

export default AddPetForm;