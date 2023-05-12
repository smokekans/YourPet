import React from 'react';

function ModalApproveAction({ title }) {
  return (
    <div>
      <div>
        <span>*</span>
        <h1>Delete adverstiment?</h1>
        <p>
          Are you sure you want to delete ${title}? You can`t undo this action.
        </p>
        <button>Cancel</button>
        <button>Yes</button>
      </div>
    </div>
  );
}

export default ModalApproveAction;
