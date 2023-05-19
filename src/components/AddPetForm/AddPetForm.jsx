import React, { useState } from 'react';
import { Formik } from 'formik';
import { petsValidationSchema } from './Yup';
import ChooseOption from './ChooseOption/ChooseOption';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import MoreInfo from './MoreInfo/MoreInfo';
import { Card, Typography, List, ListItem, Box } from '@mui/material';
import { styled } from '@mui/system';
import styles from './styles';

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
    1: <ChooseOption nextStep={() => setStep(step + 1)} setTitle={setTitle} />,
    2: (
      <PersonalDetails
        prevStep={() => setStep(step - 1)}
        nextStep={() => setStep(step + 1)}
      />
    ),
    3: (
      <MoreInfo prevStep={() => setStep(step - 1)} setFormData={setFormData} />
    ),
  };

  const stepStyles = {
    current: {
      color: '#54ADFF',
      backgroundColor: '#54ADFF',
    },
    completed: {
      color: '#00C3AD',
      backgroundColor: '#00C3AD',
    },
    future: {
      color: '#888888',
      backgroundColor: '#CCE4FB',
    },
  };

  const StepListItem = styled(({ stepState, ...otherProps }) => (
    <ListItem {...otherProps} />
  ))(({ theme, stepState }) => ({
    color: stepStyles[stepState].color,
    padding: '0 0 16px 0',
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: '10px', 
    lineHeight: '13.66px', 
    position: 'relative',
    // textAlign: 'start',
    // alignItems: 'base-line',
  
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '80px',
      height: '8px',
      borderRadius: '8px',
      marginRight: '16px',
      // display: 'flex',
      // gap: '16px',
      backgroundColor: stepStyles[stepState].backgroundColor,
    },
  }));

  return (
    <Card sx={styles.root}>
      <Typography sx={styles.title}>{step > 1 ? title : 'Add Pet'}</Typography>
      <Formik
        initialValues={formData}
        validationSchema={petsValidationSchema}
      >
        <div>
          <List sx={styles.ul}>
            {steps.map((stepName, index) => {
              let stepState;
              if (index < step - 1) {
                stepState = 'completed';
              } else if (index === step - 1) {
                stepState = 'current';
              } else {
                stepState = 'future';
              }
              return (
                <StepListItem sx={styles.li} stepState={stepState} key={index}>
                  {stepName}
                </StepListItem>
              );
            })}
          </List>
          {components[step]}

          </div>
      </Formik>
    </Card>
  );
};

export default AddPetForm;
