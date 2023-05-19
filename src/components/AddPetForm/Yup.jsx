import * as Yup from 'yup';

export const petsValidationSchema = Yup.object().shape({
  category: Yup.string()
    .required('Category is required'),
  title: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at most 16 characters')
    .required('Enter a title'),
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at most 16 characters')
    .required('Enter a name pet'),
  birthday: Yup.string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Invalid date format')
    .required('Enter a date of birth'),
  breed: Yup.string()
    .min(2, 'Breed must be at least 2 characters')
    .max(16, 'Breed must be at most 16 characters')
    .required('Enter a breed'),
  avatar: Yup.mixed()
    .required('File is required')
    .test(
      'fileSize',
      'File too large',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  sex: Yup.string()
      .required('The sex is required'),
  location: Yup.string()
    .required('Enter a location'),
  price: Yup.number()
      .required('Enter a price'),
  comments: Yup.string()
    .min(8, 'Comments must be at least 8 characters')
    .max(120, 'Comments must be at most 120 characters'),
});