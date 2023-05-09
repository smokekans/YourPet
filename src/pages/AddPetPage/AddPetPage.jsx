// import AddPetForm from 'components/AddPetForm/AddPetForm';
import React, { useState} from 'react';

const AddPetPage = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

   const handleChangeStep = (value) => {
    setStep(value);
  };

  const getPageTitle = () => {
    let pageTitle = 'Add Pet';
    if ( category) {
      switch (category) {
        case 'your-pet':
          pageTitle = 'Add my pet';
          break;
        case 'sell':
          pageTitle = 'Add pet for sell';
          break;
        case 'lost-found':
          pageTitle = 'Add to lost or found pet';
          break;
        case 'good-hands':
          pageTitle = 'Add to give a Pet for Adoption';
          break;
        default:
          pageTitle = 'Add Pet';
      }
    }
    return pageTitle;
  };

  const components = {
    1: <ChooseOption nextStep={() => setStep(step + 1)} setCategory={setCategory} />,
    2: <PersonalDetails prevStep={() => setStep(step - 1)} nextStep={() => setStep(step + 1)} setTitle={setTitle} category={category} />,
    3: <MoreInfo prevStep={() => setStep(step - 1)} category={category} />,
  };

  return (
        <div>
      <h1>{getPageTitle()}</h1>
      <ul>
        {steps.map((step, index) => (
          <li
            key={index}
            className={
              step === index + 1
                ? 'current'
                : step > index + 1
                ? 'completed'
                : ''
            }
          >
            {step}
          </li>
        ))}
      </ul>
        {components[step]}
    </div>
  );
};

const ChooseOption = ({ nextStep, setCategory }) => {
  const [category, setCategoryLocal] = useState('');

  const handleCategoryChange = event => {
    setCategoryLocal(event.target.value);
  };

  const handleNextClick = () => {
    setCategory(category);
    nextStep();
  };

  return (
    <div>
      {/* <h2>Choose option</h2> */}
      <form>
        <label>
          Your pet
          <input
            type="radio"
            name="category"
            value="your-pet"
            checked={category === 'your-pet'}
            onChange={handleCategoryChange}
          />
        </label>
        <label>
          Sell
          <input
            type="radio"
            name="category"
            value="sell"
            checked={category === 'sell'}
            onChange={handleCategoryChange}
          />
        </label>
        <label>
          Lost/found
          <input
            type="radio"
            name="category"
            value="lost-found"
            checked={category === 'lost-found'}
            onChange={handleCategoryChange}
          />
        </label>
        <label>
          In good hands
          <input
            type="radio"
            name="category"
            value="good-hands"
            checked={category === 'good-hands'}
            onChange={handleCategoryChange}
          />
        </label>
        // TODO:повернути на попердню сторінку
        <button>Сancel</button>
        <button disabled={!category} onClick={handleNextClick}>
          Next
        </button>
      </form>
    </div>
  );
};

const PersonalDetails = ({ prevStep, nextStep, category }) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };
  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleBirthdayChange = event => {
    setBirthday(event.target.value);
  };

  const handleBreedChange = event => {
    setBreed(event.target.value);
  };

  const handleNextClick = () => {
    // if (title && name && birthday && breed) {
    nextStep();
    // }
    // alert ('ayyyyy')
  };

  const handlePrevClick = () => {
    prevStep();
  };

  return (
    <div>
      {/* <h2>Personal Details</h2> */}
      <form>
        {category !== 'your-pet' && (
          <label>
            Title of add:
            <input placeholder="Type name pet" type="text" value={title} onChange={handleTitleChange} />
          </label>
        )}
         <br />
        <label>
          Name:
          <input placeholder="Type name pet" type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Birthday:
          <input placeholder="Type date of birth" type="text" value={birthday} onChange={handleBirthdayChange} />
        </label>
        <br />
        <label>
          Breed:
          <input placeholder="Type breed" type="text" value={breed} onChange={handleBreedChange} />
        </label>
        <br />
        <button onClick={handlePrevClick}>Back</button>
        // TODO:disabled={}
        <button onClick={handleNextClick}>Next</button>
      </form>
    </div>
  );
};
// import React, { useState } from 'react';

const MoreInfo = ({ prevStep, category }) => {
  const [sex, setSex] = useState('');
  const [petImage, setPetImage] = useState(null);
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [comments, setComments] = useState('');

  const handleSexChange = event => {
    setSex(event.target.value);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    setPetImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      document.getElementById('preview-image').setAttribute('src', imageUrl);
    }
  };
  // setPetImage(event.target.files[0]);
  // };

  const handleLocationChange = event => {
    setLocation(event.target.value);
  };

  const handlePriceChange = event => {
    setPrice(event.target.value);
  };

  const handleCommentsChange = event => {
    setComments(event.target.value);
  };

  const handlePrevClick = event => {
    event.preventDefault();
    prevStep();
  };

  const handleSubmit = event => {
    event.preventDefault();
    // TODO:  логіка для надсилання даних форми на сервер
    console.log('Sex:', sex);
    console.log('Pet Image:', petImage);
    console.log('Location:', location);
    console.log('Price:', price);
    console.log('Comments:', comments);
  };

  return (
    <div>
      {/* <h2>More info</h2> */}
      <form onSubmit={handleSubmit}>
        {category !== 'your-pet' && (
          <label>
            The Sex
            <select value={sex} onChange={handleSexChange}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
        )}
        <label>
          Pet Image
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <img
          id="preview-image"
          style={{ maxWidth: '181px', maxHeight: '182px' }}
        />
        {category !== 'your-pet' && (
          <label>
            Location
            <input
              placeholder="Type of location"
              type="text"
              value={location}
              onChange={handleLocationChange}
            />
          </label>
        )}
        {category === 'sell' && (
          <label>
            Price
            <input
              placeholder="Type of price"
              type="text"
              value={price}
              onChange={handlePriceChange}
            />
          </label>
        )}
        <label>
          Comments
          <textarea
            placeholder="Type breed"
            value={comments}
            onChange={handleCommentsChange}
          />
        </label>
        <button onClick={handlePrevClick}>Back</button>
        // TODO:disabled={}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPetPage;
