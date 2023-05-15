import React, { useState } from 'react';
import {Form, Formik, Field } from 'formik';
import { petsValidationSchema } from './Yup';
import { useNavigate } from 'react-router-dom';

const ChooseOption = ({ nextStep, formData, setFormData, setCategory}) => {
 const [category, setCategoryLocal] = useState('');
  const navigate = useNavigate();

  const handleCategoryChange = event => {
    setCategoryLocal(event.target.value);
  };
  // const handleNextClick = () => {
  //   setCategory(category);
  //   nextStep();
  // };

  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <div>
       <Formik
      initialValues={formData}
      // validationSchema={petsValidationSchema}
        onSubmit={values => {
          console.log(values); // log the form values
          console.log(formData);
            setCategory(category);
          setFormData({ ...values });
        
          nextStep();
            console.log('Next step function called');
        }}
          debug 

    >
         <Form>
      <label htmlFor="category">
        Your pet
        <Field
          type="radio"
          id="your-pet"
          name="category"
          value="your-pet"
          checked={category === 'your-pet'}
          onChange={handleCategoryChange}
        />
      </label>
      <label htmlFor="category">
        Sell
        <Field
          type="radio"
          id="sell"
          name="category"
          value="sell"
          checked={category === 'sell'}
          onChange={handleCategoryChange}
        />
      </label>
      <label htmlFor="category">
        Lost/found
        <Field
          type="radio"
          id="lost-found"
          name="category"
          value="lost-found"
          checked={category === 'lost-found'}
          onChange={handleCategoryChange}
        />
      </label>
      <label htmlFor="category">
        In good hands
        <Field
          type="radio"
          id="for-free"
          name="category"
          value="for-free"
          checked={category === 'for-free'}
          onChange={handleCategoryChange}
        />
      </label>
      <button type="button" onClick={handleCancelClick}>
        Cancel
          </button>
           <button type="submit" >
              Next
            </button>
        </Form>
        </Formik>
    </div>
  );
};

export default ChooseOption;

// import React, { useState } from 'react';
// import { Formik, Field, Form } from 'formik';
// import { useNavigate } from 'react-router-dom';


// const ChooseOption = ({ nextStep, setCategory }) => {
//   const [category, setCategoryLocal] = useState('');
//   const navigate = useNavigate();

//   const handleCategoryChange = event => {
//     setCategoryLocal(event.target.value);
//   };

//    const handleNextClick = () => {
//     setCategory(category);
//     nextStep();
//   };

//   const handleCancelClick = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={INITIAL_VALUES}
//         validationSchema={PetvalidationSchema}
//          onSubmit={(values, { setSubmitting }) => {
//            setCategory(values.category);
//            console.log( setCategory(values.category))
//           nextStep();
//           setSubmitting(false);
//         }}
//       >

//         <Form autoComplete="on">
//           <label htmlFor="category">
//             Your pet
//             <Field
//               type="radio"
//               id="your pet"
//               name="category"
//               value="your pet"
//               checked={category === 'your pet'}
//               onChange={handleCategoryChange}
//               // hidden
//             />
//           </label >
//           <label htmlFor="category">
//             Sell
//             <Field
//               type="radio"
//                id="sell"
//               name="category"
//               value="sell"
//               checked={category === 'sell'}
//               onChange={handleCategoryChange}
//               // hidden
//             />
//           </label>
//           <label htmlFor="category">
//             Lost/found
//             <Field
//               type="radio"
//                id="lost/found"
//               name="category"
//               value="lost/found"
//               checked={category === 'lost/found'}
//               onChange={handleCategoryChange}
//               // hidden
//             />
//           </label>
//           <label htmlFor="category">
//             In good hands
//             <Field
//               type="radio"
//                id="good hands"
//               name="category"
//               value="good hands"
//               checked={category === 'good hands'}
//               onChange={handleCategoryChange}
//               // hidden
//             />
//           </label>
//           <button type="button" onClick={handleCancelClick}>
//             Cancel
//           </button>
//              <button type="button" disabled={!category} onClick={handleNextClick}>
//             Next
//           </button>
//           </Form>

//       </Formik>
//     </div>
//   );
// };

// export default ChooseOption;
