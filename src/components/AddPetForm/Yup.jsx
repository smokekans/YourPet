import * as Yup from 'yup';

export const petsValidationSchema = Yup.object().shape({
  category: Yup.string()
    .required('Category is required'),
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at most 16 characters')
    .required('Name is required'),
  birthday: Yup.string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Invalid date format')
    .required('Date is required'),
  breed: Yup.string()
    .min(2, 'Breed must be at least 2 characters')
    .max(16, 'Breed must be at most 16 characters')
    .required('Breed is required'),
  image: Yup.mixed()
    .required('File is required')
    .test(
      'fileSize',
      'File too large',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  sex: Yup.string()
      .required('Sex is required'),
  location: Yup.string()
    .required('Location is required'),
  price: Yup.number()
      .required('Price is required'),
  comments: Yup.string()
    .min(8, 'Comments must be at least 8 characters')
    .max(120, 'Comments must be at most 120 characters'),
});