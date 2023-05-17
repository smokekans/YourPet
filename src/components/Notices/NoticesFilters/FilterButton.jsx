// import React, { useState } from 'react';
// import { connect } from 'react-redux';

// const FilterButton = ({ toggleFilter }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//     toggleFilter();
//   };

//   return (
//     <button onClick={handleClick}>{isOpen ? 'Close Filters' : 'Open Filters'}</button>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   toggleFilter: () => dispatch({ type: 'TOGGLE_FILTER' }),
// });

// export default connect(null, mapDispatchToProps)(FilterButton);


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFilter } from './filterActions';

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpen(!isOpen);
    dispatch(toggleFilter());
  };

  return (
    <button onClick={handleClick}>{isOpen ? 'Close Filters' : 'Open Filters'}</button>
  );
};

export default FilterButton;