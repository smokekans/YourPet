import React, { useEffect } from 'react';

function ModalCongrats({onClose}) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) { // Код клавіші Esc
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains('modal')) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  const handleCloseButtonClick = () => {
    onClose();
  };
  
  return (
    <div>
      <div className="modal">
        <h1>Congrats!</h1>
        <p>Your registration is success</p>
        <button onClick={handleCloseButtonClick}>Go to profile</button>
      </div>
    </div>
  );
}

export default ModalCongrats;
