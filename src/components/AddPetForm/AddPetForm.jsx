import React, {useState} from 'react';
import { Formik } from 'formik';
// import { petsValidationSchema } from './Yup';
import ChooseOption from './ChooseOption';
import PersonalDetails from './PersonalDetails';
import MoreInfo from './MoreInfo';

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
    image: '',
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
        formData={formData}
      />
    ),
    3: (
      <MoreInfo
        prevStep={() => setStep(step - 1)}
        formData={formData}
        setFormData={setFormData}
      />
    ),
  };

  return (
    <div>
      <h1>{step > 1 ? title : 'Add Pet'}</h1>
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
    </div>
  );
};

export default AddPetForm;