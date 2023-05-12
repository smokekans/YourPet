import React, { useState, useEffect, useCallback } from 'react';
import ChooseOption from './ChooseOption';
import PersonalDetails from './PersonalDetails';
import MoreInfo from './MoreInfo';

const AddPetForm = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const components = {
    1: (
      <ChooseOption
        nextStep={() => setStep(step + 1)}
        setCategory={setCategory}
      />
    ),
    2: (
      <PersonalDetails
        prevStep={() => setStep(step - 1)}
        nextStep={() => setStep(step + 1)}
        category={category}
      />
    ),
    3: (
      <MoreInfo
        prevStep={() => setStep(step - 1)}
        category={category}
      />
    ),
  };

  const getPageTitle = useCallback(() => {
    const titles = {
      'your-pet': 'Add my pet',
      'sell': 'Add pet for sell',
      'lost-found': 'Add to lost or found pet',
      'good-hands': 'Add to give a Pet for Adoption',
      '': 'Add Pet',
    };
    return titles[category] || 'Add Pet';
  }, [category]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);

  return (
    <div>
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
    </div>
  );
};

export default AddPetForm;

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
  