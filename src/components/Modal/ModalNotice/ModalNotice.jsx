import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { useSelector } from 'react-redux';
// import { getFavorite } from 'redux/user/userSelectors';
import { getOneNotice } from 'redux/notices/noticesSelectors';

const modalRoot = document.querySelector('#modal-root');

function ModalNotice({ onClose, onAddToFavorite }) {
  const getOne = useSelector(getOneNotice);

  // console.log(getOne)

  const {
    // _id,
    image,
    name,
    comments,
    phone,
    title,
    birthday,
    location,
    sex,
    breed,
    email,
  } = getOne || {};

  // const favorite = useSelector(getFavorite);
  // console.log(favorite)
  // const favoritePet = favorite.find(p => (p._id === _id))
  //     const favoriteElement = useSelector(getFavorite);
  // const dataArray = Array.isArray(favoriteElement) ? favoriteElement : [favoriteElement];
  //   console.log(dataArray);

  //   console.log(favoriteElement); // Проверка значения favoriteElement
  //   const isFavorite = dataArray.includes(_id);

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    function handleEscape(e) {
      if (e.code === 'Escape') onClose();
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  const AddAndClose = () => {
    onAddToFavorite();
    onClose();
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdrop}>
      <div className={css.Modal}>
        <span
          onClick={() => {
            onClose();
          }}
        >
          Close
        </span>
        <img src={image} alt={title} width="150" height="150px" />
        <h1>{title}</h1>
        <ul>
          <li>
            <span>Name: </span>
            {name}
          </li>
          <li>
            <span>Birthday: </span>
            {birthday}
          </li>
          <li>
            <span>Breed: </span>
            {breed}
          </li>
          <li>
            <span>Place: </span>
            {location}
          </li>
          <li>
            <span>The sex: </span>
            {sex}
          </li>
          <li>
            <span>Email: </span>
            <a href="mailto:{email}">{email}</a>
          </li>
          <li>
            <span>Phone: </span>
            <a href="tell:{phone}">{phone}</a>
          </li>
        </ul>
        <p>
          <span>Comments: </span>
          {comments}
        </p>
        {/* {isFavorite ? <button onClick={AddAndClose}>Remove from favorite</button> : <button onClick={AddAndClose}>Add to favorite</button>} */}
        <button onClick={AddAndClose}>Add to favorite</button>
        <button>
          <a href="tell:{phone}">Contact</a>
        </button>
      </div>
    </div>,
    modalRoot
  );
}

export default ModalNotice;
