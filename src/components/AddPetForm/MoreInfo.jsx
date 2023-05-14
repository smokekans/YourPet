import React, { useState } from 'react';
import { Field, ErrorMessage, Formik, Form } from 'formik';
import { petsValidationSchema } from './Yup';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPet } from 'redux/pets/petsOperation';
import { createNotice } from 'redux/notices/noticesOperation';
import { getToken } from 'redux/auth/authSelectors'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { ReactComponent as IconPlus } from '../../images/icons/plus.svg';
import { toast } from 'react-toastify';



const MoreInfo = ({  formData, setFormData, prevStep, category, }) => {
  const [fileInput, setFileInput] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);

  const handleAddAvatar = (e) => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
    }
  };

  const handlePrevClick = () => {
    prevStep();
  };
 
   const handleSubmit = async (values) => {
    setFormData({
      ...values,
      image: fileInput,
   })
    if (values.category === 'your-pet') {
      try {
        dispatch(createPet({values, token, image: fileInput }))
        toast.success('Pet card created successfully');
        navigate('/user');
      } catch (error) {
        toast.error(`Error creating pet card: ${error.message}`);
      }
    } else {
      try {
        dispatch(createNotice({ values, token }));
        toast.success('Notice created successfully');
        navigate('/notices/sell');
      } catch (error) {
        toast.error(`Error creating notice: ${error.message}`);
      }
    }
  };

  return (
    <div>
        <Formik
      initialValues={formData}
      validationSchema={petsValidationSchema}
       onSubmit={handleSubmit}
      >
          {({ values, setFieldValue}) => (
        <Form>
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
                <ErrorMessage name="sex" render={msg => < div > {msg} </ div >} />
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
                <ErrorMessage name="sex" render={msg => < div > {msg} </ div >} />
              </label>
            </>
          )}
          <label htmlFor="image">
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
                id="image"
                name="image"
                accept=".png, .jpg, .jpeg, .webp"
                onChange={e => handleAddAvatar(e, setFieldValue)}
                hidden
              />
            <ErrorMessage name="image" render={msg => < div > {msg} </ div >} />
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
              <ErrorMessage name="location" render={msg => < div > {msg} </ div >} />
            </label>
          )}
          {category === 'sell' && (
            <label htmlFor="price">
              Price
              <Field placeholder="Type of price" type="number" id="price" name="price" />
              <ErrorMessage name="price" render={msg => < div > {msg} </ div >} />
            </label>
          )}
          <label htmlFor="comments">
            Comments
            <Field as="textarea" placeholder="Type comments" id="comments" name="comments" />
            <ErrorMessage name="comments" render={msg => < div > {msg} </ div >} />
          </label>
          <button onClick={handlePrevClick}>Back</button>
            <button type="submit" >
              Done
          </button>
          </Form>
           )}
        </Formik>
           </div>
  );
}
export default MoreInfo;

 // const handleSubmit = async (values) => {
  //   setFormData({
  //     ...values,
  //     image: fileInput,
  //  })
  //   if (values.category === 'your-pet') {
  //     try {
  //       dispatch(createPet({values, token, image: fileInput }))
  //       toast.success('Pet card created successfully');
  //       navigate('/user');
  //       // setSubmitting(false);
  //     } catch (error) {
  //       toast.error(`Error creating pet card: ${error.message}`);
  //     }
  //   } else {
  //     try {
  //       dispatch(createNotice({ values, token }));
  //       toast.success('Notice created successfully');
  //       navigate('/notices/sell');
  //       // setSubmitting(false);
  //     } catch (error) {
  //       toast.error(`Error creating notice: ${error.message}`);
  //     }
  //   }
  // };


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
  
// const MoreInfo = ({formData, setFormData, category }) => {
//   const [fileInput, setFileInput] = useState();
//   // const dispatch = useDispatch();
//   // const navigate = useNavigate();

//   const handleAddAvatar = (e) => {
//     const [file] = e.target.files;
//     if (file) {
//       setFileInput(file);
//     }
//   };

  // const handlePrevClick = () => {
  //   prevStep();
  // };

  //  const handleSubmit = (values, { resetForm }) => {
  //   const data = new FormData();
  //   Object.keys(values).forEach((key) => {
  //     data.append(key, values[key]);
  //   });
  //   data.append('image', fileInput);

  //   if (category === 'your pet') {
  //     dispatch(createPet(data))
  //       .then(() => {
  //         toast.success('Pet card created successfully');
  //         navigate('/user');
  //         resetForm();
  //       })
  //       .catch((error) => {
  //         toast.error(`Error creating pet card: ${error.message}`);
  //       });
  //   } else {
  //     dispatch(createNotice(data))
  //       .then(() => {
  //         toast.success('Notice created successfully');
  //         navigate('/notices/sell');
  //         resetForm();
  //       })
  //       .catch((error) => {
  //         toast.error(`Error creating notice: ${error.message}`);
  //       });
  //   }
  // };

  // return (
  //   <div>
      {/* <Formik
        initialValues={formData}
        validationSchema={petsValidationSchema}
        // onSubmit={handleSubmit}
      > */}
        {/* {({ values, setFieldValue}) => ( */}
     
            // {category !== 'your-pet' && (
            //   <>
            //     <p>The Sex</p>
            //     <label>
            //       <Field
            //         type="radio"
            //         id="female"
            //         name="sex"
            //         value="female"
            //         alt="female"
            //         // checked={values.sex === 'female'}
            //         // hidden
            //       />
            //       <span>
            //         <BsGenderFemale fill="#F43F5E" />
            //       </span>
            //       <p>Female</p>
            //     </label>
            //     <label>
            //       <Field
            //         type="radio"
            //         id="male"
            //         name="sex"
            //         value="male"
            //         alt="male"
                    // checked={values.sex === 'male'}
                    // hidden
//                   />
//                   <span>
//                     <BsGenderMale fill="#54ADFF" />
//                   </span>
//                   <p>Male</p>
//                 </label>
//               </>
//             )}
//             <label htmlFor="image">
//               Load the pet’s image:
//               {fileInput ? (
//                 <img
//                   id="image"
//                   src={URL.createObjectURL(fileInput)}
//                   alt={fileInput.name}
//                   width="182px"
//                   height="182px"
//                 />
//               ) : (
//                 <IconPlus />
//               )}
//               <Field
//                 type="file"
//                 id="pet-image"
//                 name="pet-image"
//                 accept=".png, .jpg, .jpeg, .webp"
//                 onChange={e => handleAddAvatar(e, setFormData)}
//                 hidden
//               />
//               <ErrorMessage name="pet-image" component="div" />
//             </label>
//             {category !== 'your-pet' && (
//               <label htmlFor="location">
//                 Location
//                 <Field
//                   placeholder="Type of location"
//                   type="text"
//                   name="location"
//                 />
//                 <ErrorMessage name="location" component="div" />
//               </label>
//             )}
//             {category === 'sell' && (
//               <label htmlFor="price">
//                 Price
//                 <Field placeholder="Type of price" type="number" name="price" />
//                 <ErrorMessage name="price" component="div" />
//               </label>
//             )}
//             <label htmlFor="comments">
//               Comments
//               <Field as="textarea" placeholder="Type comments" name="comments" />
//               <ErrorMessage name="comments" component="div" />
//             </label>
//              {/* <button type="button" onClick={handlePrevClick}>Back</button>
//             <button type="submit">Done</button> */}
        
//         {/* )} */}
   
//     </div>
//   );
// };

// export default MoreInfo;



  // const handleSubmit = async (values, { resetForm }) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('category', values.category);
  //     formData.append('title', values.title);
  //     formData.append('name', values.name);
  //     formData.append('birthday', values.birthday);
  //     formData.append('breed', values.breed);
  //     formData.append('sex', values.sex);
  //     formData.append('image', values.image);
  //     formData.append('location', values.location);
  //     formData.append('price', values.price);
  //     formData.append('comments', values.comments);

  //     if (category === 'your-pet') {
  //       await dispatch(createPetCard(formData));
  //       // Додайте переадресацію на сторінку UserPage
  //     } else {
  //       await dispatch(createNoticeCard(formData));
  //       // Додайте переадресацію на сторінку NoticesPage
  //     }

  //     // Очищення форми після успішного створення картки
  //     resetForm();
  //   } catch (error) {
  //     dispatch(setCardCreationError(error.message));
  //     toast.error('Error creating card. Please try again.');
// const handleSubmit = async (values, { resetForm }) => {
//   try {
//     // Перевірка валідності введених даних
//     if (!values.category || !values.title || !values.name || !values.birthday || !values.breed || !values.sex || !values.image || !values.location || !values.price || !values.comments) {
//       toast.error('Please fill in all required fields');
//       return;
//     }
//     // Відправлення запиту на сервер
//     const endpoint = values.category === 'your-pet' ? '/pets' : '/notices';
//     const response = await axios.post(endpoint, {
//       category: values.category,
//       title: values.title,
//       name: values.name,
//       birthday: values.birthday,
//       breed: values.breed,
//       sex: values.sex,
//       location: values.location,
//       price: values.price,
//       comments: values.comments,
//       image: values.image,
//     });
//     // Перенаправлення користувача на відповідну сторінку
//     if (values.category === 'your-pet') {
//       window.location.href = '/UserPage';
//     } else {
//       window.location.href = '/NoticesPage';
//     }
//   } catch (error) {
//     // Відображення повідомлення про помилку
//     toast.error('Error creating pet card');
//   }


//  const handleSubmit = (values, { resetForm }) => {
//     const formData = new FormData();
//     formData.append('category', values.category);
//     formData.append('title', values.title);
//     formData.append('name', values.name);
//     formData.append('birthday', values.birthday);
//     formData.append('breed', values.breed);
//     formData.append('sex', values.sex);
//     formData.append('image', fileInput);
//     formData.append('location', values.location);
//     formData.append('price', values.price);
//     formData.append('comments', values.comments);
//     dispatch();
//     resetForm();
//   };

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