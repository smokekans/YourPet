import React from 'react';
import { getSingleNotice } from 'redux/notices/noticesOperation';
import { addToFavorites, deleteFromFavorite } from 'redux/user/userOperations';

function ModalNotice({ data }) {
  const {
    image,
    category,
    comments,
    phone,
    title,
    birthday,
    location,
    sex,
    breed,
    email,
  } = data;
  
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h1>${title}</h1>
        <ul>
          <li>
            <span>Name:</span>
          </li>
          <li>
            <span>Birthday:</span>${birthday}
          </li>
          <li>
            <span>Breed:</span>${breed}
          </li>
          <li>
            <span>Place:</span>${location}
          </li>
          <li>
            <span>The sex:</span>${sex}
          </li>
          <li>
            <span>Email:</span>${email}
          </li>
          <li>
            <span>Phone:</span>${phone}
          </li>
        </ul>
        <p>
          <span>Comments:</span>${comments}
        </p>
        <button>Add to</button>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default ModalNotice;
