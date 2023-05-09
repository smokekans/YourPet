import React from 'react';

import { useSelector } from 'react-redux';
import { getNameUser } from '../../../redux/user/userSelectors';

function PetsData() {
  const user = useSelector(getNameUser);

  const pets = user.user.pets;
  console.log(pets);
  return (
    <div>
      <h2>My pets:</h2>
      <button>Add pets +</button>
      <ul>
        {pets.map(({ birthday, comments, image, name, breed }) => {
          return (
            <>
              
              <li>
                <img src={image} alt="" height='161'/>
                <ul>
                  <li>Name: {name}</li>
                  <li>Data of dirth: {birthday}</li>
                  <li>Breed:{breed}</li>
                  <li>Comments: {comments}</li>
                </ul>
              </li>
            </>
          );
        })}
        
      </ul>
    </div>
  );
}

export default PetsData;
