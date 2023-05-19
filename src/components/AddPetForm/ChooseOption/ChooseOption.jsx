import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, ErrorMessage, useFormikContext } from 'formik';
import { Box, Button, FormControlLabel, Radio, Typography } from '@mui/material';
import styles from './styles';
import { ReactComponent as IconBack } from '../../../images/icons/arrow-left.svg';
import { ReactComponent as IconPaws } from '../../../images/icons/pawprint.svg';

const ChooseOption = ({ nextStep, setTitle }) => {
  const navigate = useNavigate();
  const { values, setFieldValue } = useFormikContext();

  const categoryTitles = {
    'your-pet': 'Add my pet',
    'sell': 'Add pet for sell',
    'lost-found': 'Add to lost or found pet',
    'for-free': 'Add to give a Pet for Adoption',
  };

  const handleCancelClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    nextStep();
    setTitle(categoryTitles[values.category]);
  };

  const handleChange = (event) => {
    setFieldValue("category", event.target.value);
  };

  return (
    <Form>
      <Box sx={styles.box}>
      <FormControlLabel
        value="your-pet"
        control={<Radio sx={{...styles.radio, display: 'none'}} />}
        label={<Typography sx={styles.radio}>Your pet</Typography>}
        labelPlacement="end"
        onChange={handleChange}
      />
      <FormControlLabel
        value="sell"
        control={<Radio sx={{...styles.radio, display: 'none'}} />}
        label={<Typography sx={styles.radio}>Sell</Typography>}
        labelPlacement="end"
        onChange={handleChange}
      />
      <FormControlLabel
        value="lost-found"
        control={<Radio sx={{...styles.radio, display: 'none'}} />}
        label={<Typography sx={styles.radio}>Lost/found</Typography>}
        labelPlacement="end"
        onChange={handleChange}
      />
      <FormControlLabel
        value="for-free"
        control={<Radio sx={{...styles.radio, display: 'none'}} />}
        label={<Typography sx={styles.radio}>In good hands</Typography>}
        labelPlacement="end"
        onChange={handleChange}
      />
      <ErrorMessage
        name="category"
        />
         </Box>
      <Box sx={styles.boxbtn}>
        <Button sx={styles.btn} type="button" onClick={handleCancelClick}>
          <IconBack fill="#54ADFF" />
          &nbsp;
          Cancel
        </Button>
        <Button sx={styles.button} type="button" onClick={handleNextClick} endIcon={<IconPaws fill="#FEF9F9" />}>
          Next
        </Button>
        </Box>
       
    </Form>
  );
};

export default ChooseOption;
