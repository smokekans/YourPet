import * as Yup from 'yup';

export const PetvalidationSchema = Yup.object().shape({
  category: Yup.string()
    .required('Required')
    .oneOf(['your-pet', 'sell', 'lost-found', 'good-hands']),
   title: Yup.string()
    .min(2)
    .max(48)
    .required('Field is required!'),
  name: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(16, 'Too Long!'),
  birthday: Yup.string()
    .required('Required')
    .matches(
      /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/,
      'Invalid date format. Use DD.MM.YYYY'
    ),
  breed: Yup.string()
    .min(2, "Breed should be at least 2 characters")
    .max(16, "Breed should not exceed 16 characters")
    .required("Breed is required"),
  image: Yup.mixed()
    .required('Image is required!')
   .test(
    'fileSize',
    'File size too large',
    (value) => !value || value.size <= 5000000
   ),
  sex: Yup.string().when('category', {
    is: (val) => ['sell', 'lost-found', 'good-hands'].includes(val),
    then: Yup.string()
      .required('Required')
      .oneOf(['male', 'female'], 'Invalid value'),
    otherwise: Yup.string(),
  }),
  location: Yup.string().when('category', {
    is: (val) => ['sell', 'lost-found', 'good-hands'].includes(val),
    then: Yup.string()
      .required('Required'),
  }),
  price: Yup.number()
    .when("category", {
      is: "sell",
      then: Yup.number()
        .min(1, "Price should be more than 0")
        .required("Price is required"),
      otherwise: Yup.number()
    }),
  comments: Yup.string()
    .required('Comments is required!')
    .min(8, "Comments should be at least 8 characters")
    .max(120, "Comments should not exceed 120 characters")
    
}); 

