import React, { useEffect, useState } from 'react';
import { Box, Input, InputAdornment, IconButton } from '@mui/material';
import { ReactComponent as IconSearch } from '../../../images/icons/search.svg';
import { ReactComponent as IconCross } from '../../../images/icons/cross.svg';
import { useDispatch } from 'react-redux';
import {
  getNoticesByQwery,
  getUserNotices,
} from 'redux/notices/noticesOperation';
import { useParams } from 'react-router-dom';
import { getFavorite } from 'redux/user/userOperations';

const NoticesSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]); 
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getNoticesByQwery());
  }, [dispatch]);

  const onSubmit = event => {
    event.preventDefault();

    const newQuery = event.target.elements.search.value.trim();
    if (!newQuery) {
      return;
    }

    const requestData = { query: newQuery, category: categoryName };

    let action;
    if (categoryName === 'favorite') {
      action = getFavorite(requestData);
    } else if (categoryName === 'owner') {
      action =  getUserNotices(requestData);
    } else {
      action = getNoticesByQwery(requestData);
    }

    dispatch(action)
      .then(data => {
        setData(data); 
        onSearch(newQuery);
        setQuery('');
      })
      .catch(error => {
        console.error(error);
      });
  };

const handleQueryChange = event => {
  const newQuery = event.target.value;
  setQuery(newQuery);

  if (event.nativeEvent.inputType === 'deleteContentBackward' && !newQuery.trim()) {
    return;
  }

  if (!newQuery.trim()) {
    let action;

    if (categoryName === 'favorite') {
      action = getFavorite({
        query: '',
        // category: categoryName
      });
    } else if (categoryName === 'owner') {
      action =  getUserNotices({
        query: '',
        // category: categoryName

      });
    } else {
      action = getNoticesByQwery({ query: '', category: categoryName });
    }

    dispatch(action)
      .then(result => {
        setData(result); 
        setQuery("");
       
        onSearch(newQuery); 
      })
      .catch(error => {
        console.error(error);
      });
  }
};

  const handleClearQuery = () => {
    setQuery('');
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40px',
      }}
    >
      <Input
        placeholder="Search"
        name="search"
        value={query}
        onChange={handleQueryChange}
        disableUnderline
        sx={{
          width: '608px',
          height: '44px',
          boxShadow: 2,
          borderRadius: '20px',
          paddingLeft: '12px',
          paddingRight: '44px',
          position: 'relative',
        }}
        endAdornment={
          <>
            {query && (
              <InputAdornment position="end">
                <IconButton onClick={handleClearQuery} size="small">
                  <IconCross />
                </IconButton>
              </InputAdornment>
            )}
            <InputAdornment
              position="end"
              sx={{ position: 'absolute', right: 0 }}
            >
              <IconButton type="submit" size="small">
                <IconSearch />
              </IconButton>
            </InputAdornment>
          </>
        }
      />
    </Box>
  );
};

export default NoticesSearch;




// import React, { useEffect, useState } from "react";
// import { Box, Input, InputAdornment, IconButton } from "@mui/material";
// import { ReactComponent as IconSearch } from "../../../images/icons/search.svg";
// import { ReactComponent as IconCross } from "../../../images/icons/cross.svg";
// import { useDispatch } from "react-redux";
// import { getNoticesByQwery, getNoticesByQweryFavorite, getNoticesByQweryOwner } from "redux/notices/noticesOperation";
// import { useParams } from "react-router-dom";

// const NoticesSearch = ({ onSearch }) => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
//   const { categoryName } = useParams();

//   useEffect(() => {
//     dispatch(getNoticesByQwery());
//   }, [dispatch]);

//   const onSubmit = (event) => {
//     event.preventDefault();

//     const newQuery = event.target.elements.search.value.trim();
//     if (!newQuery) {
//       return;
//     }

//     const requestData = { query: newQuery, category: categoryName };

//     // eslint-disable-next-line no-unused-vars
//     let data = [];

//     if (categoryName === "favorite") {
//       dispatch(getNoticesByQweryFavorite(requestData))
//         .then((result) => {
//           data = result;
//           onSearch(newQuery);
//           setQuery("");
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else if (categoryName === "owner") {
//       dispatch(getNoticesByQweryOwner(requestData))
//         .then((result) => {
//           data = result;
//           onSearch(newQuery);
//           setQuery("");
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else {
//       dispatch(getNoticesByQwery(requestData))
//         .then((result) => {
//           data = result;
//           onSearch(newQuery);
//           setQuery("");
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   // const handleQueryChange = (event) => {
//   //   const newQuery = event.target.value;
//   //   setQuery(newQuery);

//   //   if (event.nativeEvent.inputType === "deleteContentBackward" && !newQuery.trim()) {
//   //     return;
//   //   }

//   //   if (!newQuery.trim()) {
//   //     dispatch(getNoticesByQwery({ query: "", category: categoryName }))
//   //       .catch((error) => {
//   //         console.error(error);
//   //       });
//   //   }
//   // };

//   const handleQueryChange = (event) => {
//   const newQuery = event.target.value;
//   setQuery(newQuery);

//   if (event.nativeEvent.inputType === "deleteContentBackward" && !newQuery.trim()) {
//     return;
//   }

//   if (!newQuery.trim()) {
//     let action;

//     if (categoryName === "favorite") {
//       action = getNoticesByQweryFavorite({ query: "", category: categoryName });
//     } else if (categoryName === "owner") {
//       action = getNoticesByQweryOwner({ query: "", category: categoryName });
//     } else {
//       action = getNoticesByQwery({ query: "", category: categoryName });
//     }

//     dispatch(action).catch((error) => {
//       console.error(error);
//     });
//   }
// };

//   const handleClearQuery = () => {
//     setQuery("");
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={onSubmit}
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: "40px",
//       }}
//     >
//       <Input
//         placeholder="Search"
//         name="search"
//         value={query}
//         onChange={handleQueryChange}
//         disableUnderline
//         sx={{
//           width: "608px",
//           height: "44px",
//           boxShadow: 2,
//           borderRadius: "20px",
//           paddingLeft: "12px",
//           paddingRight: "44px",
//           position: "relative",
//         }}
//         endAdornment={
//           <>
//             {query && (
//               <InputAdornment position="end">
//                 <IconButton onClick={handleClearQuery} size="small">
//                   <IconCross />
//                 </IconButton>
//               </InputAdornment>
//             )}
//             <InputAdornment position="end" sx={{ position: "absolute", right: 0 }}>
//               <IconButton type="submit" size="small">
//                 <IconSearch />
//               </IconButton>
//             </InputAdornment>
//           </>
//         }
//       />
//     </Box>
//   );
// };

// export default NoticesSearch;