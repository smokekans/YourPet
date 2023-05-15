import React, { useEffect, useState, useCallback } from 'react';
// import { Formik, Form } from 'formik';
// import { petsValidationSchema } from './Yup';
import ChooseOption from './ChooseOption';
import PersonalDetails from './PersonalDetails';
import MoreInfo from './MoreInfo';

const AddPetForm = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [formData, setFormData] = useState({
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
  });

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const components = {
    1: (
      <ChooseOption
        nextStep={() => setStep(step + 1)}
        formData={formData}
        setFormData={setFormData}
        setCategory={setCategory}
        category={category}
      
      />
    ),
    2: (
      <PersonalDetails
        prevStep={() => setStep(step - 1)}
        nextStep={() => setStep(step + 1)}
        formData={formData}
        setFormData={setFormData}
        category={category}
    
      />
    ),
    3: (
      <MoreInfo
        prevStep={() => setStep(step - 1)}
        formData={formData}
        setFormData={setFormData}
        category={category}
      
      />
    ),
  };

  const getPageTitle = useCallback(() => {
    const titles = {
      'your-pet': 'Add my pet',
      'sell': 'Add pet for sell',
      'lost-found': 'Add to lost or found pet',
      'for-free': 'Add to give a Pet for Adoption',
      '': 'Add Pet',
    };
    return titles[category] || 'Add Pet';
  }, [category]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);

  return (
    <div>
      {/* // <Formik
    //   initialValues={formData}
    //   validationSchema={petsValidationSchema}
    //   onSubmit={handleSubmit}
    // >
    //     <Form> */}
      <h1>{title}</h1>
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
      {/* {step === 1 && <ChooseOption setFormValues={setFormData} setStep={setStep} setCategory={setCategory}/>}
          {step === 2 && <PersonalDetails category={category} />}
          {step === 3 && <MoreInfo formData={formData} setFormData={setFormData} category={category} />} */}

      {/* {step > 1 && (
            <button type="button" onClick={prevStep}>
              Back
            </button>
          )} */}
      {/* {step < steps.length && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )} */}
      {/* {step === steps.length && (
            <button type="submit">
              Done
            </button>
          )} */}
    </div>
  );
};

export default AddPetForm;

//  const nextStep = () => {
//     if (step === 1) {
//       setCategory(category);
//       setStep(step + 1);
//     }
//      setStep(step + 1);
//   }

//   const prevStep = () => setStep(step - 1);

// const handleSubmit = (values) => {
//   setFormData({...values});
//   if (step < steps.length) {
//     nextStep();
//   } else {
//     // setSubmitting(false);
//   }
// };
//   const getPageTitle = useCallback(() => {
//   const titles = {
//     'your-pet': 'Add my pet',
//     'sell': 'Add pet for sell',
//     'lost-found': 'Add to lost or found pet',
//     'good-hands': 'Add to give a Pet for Adoption',
//     '': 'Add Pet',
//   };
//   return titles[category] || 'Add Pet';
// }, [category]);

// useEffect(() => {
//   setTitle(getPageTitle());
// }, [getPageTitle]);

// useEffect(() => {
//   const titles = {
//     'your-pet': 'Add my pet',
//     'sell': 'Add pet for sell',
//     'lost/found': 'Add to lost or found pet',
//     'good-hands': 'Add to give a Pet for Adoption',
//     '': 'Add Pet',
//   };
//   setTitle(titles[formData.category] || 'Add Pet');
//    console.log([formData.category])
// }, [formData.category]);

// const AddPetForm = () => {
//   const [step, setStep] = useState(1);
//   const [category, setCategory] = useState('');
//   const [title, setTitle] = useState('');

//   const steps = ['Choose Option', 'Personal Details', 'More Info'];

//   const components = {
//     1: (
//       <ChooseOption
//         nextStep={() => setStep(step + 1)}
//         setCategory={setCategory}
//       />
//     ),
//     2: (
//       <PersonalDetails
//         prevStep={() => setStep(step - 1)}
//         nextStep={() => setStep(step + 1)}
//         category={category}
//       />
//     ),
//     3: (
//       <MoreInfo
//         prevStep={() => setStep(step - 1)}
//         category={category}
//       />
//     ),
//   };

//   const getPageTitle = useCallback(() => {
//     const titles = {
//       'your pet': 'Add my pet',
//       'sell': 'Add pet for sell',
//       'lost/found': 'Add to lost or found pet',
//       'good hands': 'Add to give a Pet for Adoption',
//       '': 'Add Pet',
//     };
//     return titles[category] || 'Add Pet';
//   }, [category]);

//   useEffect(() => {
//     setTitle(getPageTitle());
//   }, [getPageTitle]);

//   return (
//     <div>
//       <h1>{title}</h1>
//       <ul>
//         {steps.map((stepName, index) => (
//           <li
//             key={index}
//             className={`step ${stepName <= step ? 'current' : 'completed'}`}
//           >
//             {stepName}
//           </li>
//         ))}
//       </ul>
//       {components[step]}
//     </div>
//   );
// };

// export default AddPetForm;
