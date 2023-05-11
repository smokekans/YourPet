import React from 'react';
import { useSelector } from 'react-redux';
import { isPets } from '../../../redux/user/userSelectors';

function PetsData() {
  const Pets = useSelector(isPets);


  return (<>
   {!Pets ?<div></div>:<div>
    <h2>My pets:</h2>
    
    <button>Add pets +</button>
    <ul>
      {Pets.map(({ _id, birthday, comments, image, name, breed }) => {
        return (
          <>
            <li key={_id}>
              <img src={image} alt="" height="161" />
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
  </div>}</>
   
    
  );
}

export default PetsData;
