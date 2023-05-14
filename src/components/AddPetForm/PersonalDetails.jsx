import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import { petsValidationSchema } from './Yup';

const PersonalDetails = ( prevStep, nextStep, formData, setFormData, category) => {

   const handlePrevClick = () => {
    prevStep();
  };

  return (
    <div>
         <Formik
      initialValues={formData}
      // validationSchema={petsValidationSchema}
       onSubmit={values => {
         setFormData({ ...values});
          nextStep();
        }}
    >
         <Form>
        {category !== 'your-pet' && (
          <label htmlFor="title">
            Title of add:
            <Field placeholder="Type title" type="text" name="title" id="title" />
            <ErrorMessage name="title" render = { msg => < div > { msg } </ div > } />
          </label>
        )}
        <label htmlFor="name">
          Name:
          <Field placeholder="Type name pet" type="text"  name="name" id="name"/>
          <ErrorMessage name="name" render = { msg => < div > { msg } </ div > } />
        </label>
        <label htmlFor="birthday">
          Birthday:
          <Field
            placeholder="Type date of birth"
            // type="date"
            name="birthday"
            id="birthday"
            data-pattern="**.**.****"
          />
          <ErrorMessage name="birthday" render = { msg => < div > { msg } </ div > }/>
        </label>
        <label htmlFor="breed">
          Breed:
          <Field placeholder="Type breed" type="text" name="breed" id="breed"  />
          <ErrorMessage name="breed" render = { msg => < div > { msg } </ div > } />
          </label>
          <button onClick={handlePrevClick}>Back</button>
           <button type="submit" >
              Next
            </button>
        </Form>
        </Formik>
    </div>
  );
};

export default PersonalDetails;


// import React from 'react';
// import { Formik, ErrorMessage, Field, Form } from 'formik';
// import * as Yup from 'yup';
// // import { PetvalidationSchema } from './Yup';

// import { parse } from 'date-fns';
// import { format } from 'date-fns';

// const today = format(new Date(), 'dd.MM.yyyy');
// export const PetvalidationSchema = Yup.object({
//   category: Yup.string()
//     .required('Required')
//     .oneOf(['your-pet', 'sell', 'lost-found', 'good-hands']),
//    title: Yup.string()
//     .min(2)
//     .max(48)
//     .required('Field is required!'),
//   name: Yup.string()
//     .required('Required')
//     .min(2, 'Too Short!')
//     .max(16, 'Too Long!'),
//   birthday: Yup.date()
//      .transform((value, originalValue) =>
//       parse(originalValue, 'dd.MM.yyyy', new Date())
//     )
//     .typeError('Please enter a valid date DD.MM.YYYY')
//     .required()
//     .max(today),
//   breed: Yup.string()
//     .min(2, "Breed should be at least 2 characters")
//     .max(16, "Breed should not exceed 16 characters")
//     .required("Breed is required"),
//   image: Yup.mixed()
//     .required('Image is required!')
//    .test(
//     'fileSize',
//     'File size too large',
//     (value) => !value || value.size <= 3000000
//    ),
//   sex: Yup.string().when('category', {
//     is: (value) => ['sell', 'lost-found', 'good-hands'].includes(value),
//     then: Yup.string()
//       .required('Required')
//       .oneOf(['male', 'female'], 'Invalid value'),
//     otherwise: Yup.string(),
//   }),
//   location: Yup.string().when('category', {
//     is: (value) => ['sell', 'lost-found', 'good-hands'].includes(value),
//     then: Yup.string()
//       .required('Required'),
//   }),
//  price: Yup.number()
//     .nullable()
//     .when("category", {
//       is: "sell",
//       then: Yup.number()
//         .min(1, "Price should be more than 0")
//         .required("Price is required"),
//       otherwise: Yup.number()
//     }),
//   comments: Yup.string()
//     .required('Comments is required!')
//     .min(8, "Comments should be at least 8 characters")
//     .max(120, "Comments should not exceed 120 characters")
    
// }); 


//  const INITIAL_VALUES = {
//     category: '',
//     title: '',
//     name: '',
//     birthday: '',
//     breed: '',
//     sex: '',
//     image: null,
//     location: '',
//     price: '',
//     comments: '',
// };
  
// const PersonalDetails = ({ prevStep, nextStep, category }) => {

//   return (
//     <div>
//       <Formik
//         initialValues={INITIAL_VALUES}
//         validationSchema={PetvalidationSchema}
//          onSubmit={(values) => {
//           console.log(values);
//            nextStep();
//              }}
        
//       >
//           <Form autoComplete="on">
//             {category !== 'your pet' && (
//               <label htmlFor="title">
//                 Title of add:
//                 <Field placeholder="Type title" type="text" name="title" id="title" />
//                 <ErrorMessage name="title" component="div" />
//               </label>
//             )}
//             <label htmlFor="name">
//               Name:
//               <Field placeholder="Type name pet" type="text"  name="name" id="name"/>
//               <ErrorMessage name="name" component="div" />
//             </label>
//             <label htmlFor="birthday">
//               Birthday:
//               <Field
//                 placeholder="Type date of birth"
//                 // type="date"
//               name="birthday"
//               id="birthday"
//                  data-pattern="**.**.****"
              
//               />
//               <ErrorMessage name="birthday" component="div" />
//             </label>
//             <label htmlFor="breed">
//               Breed:
//               <Field placeholder="Type breed" type="text" name="breed" id="breed"  />
//               <ErrorMessage name="breed" component="div" />
//             </label>
//              <button type="button" onClick={prevStep}>Back</button>
//            <button type="submit">Next</button>
//           </Form>
//       </Formik>
//     </div>
//   );
// };

// export default PersonalDetails;