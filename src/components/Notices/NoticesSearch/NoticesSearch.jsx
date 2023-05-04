import { useState } from "react";
import {
  Box,
  Input,
  InputAdornment,
  IconButton
} from "@mui/material";
import { ReactComponent as IconSearch } from '../../../images/icons/search.svg';
import {ReactComponent as IconCross} from '../../../images/icons/cross-small.svg'
// import { SearchOutlined } from "@mui/icons-material";
// import { Clear } from "@mui/icons-material";

function NoticesSearch() {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClearQuery = () => {
    setQuery("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: 608,
        height: 44,
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: 4,
        paddingLeft: 1,
        paddingRight: 1
      }}
    >
      <Input
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
        disableUnderline
        sx={{ flexGrow: 1 }}
        endAdornment={
      query && (
        <InputAdornment position="end">
          <IconButton onClick={handleClearQuery} size="small">
            <IconCross />
          </IconButton>
        </InputAdornment>
      )
    }
  />
  <InputAdornment position="end">
    <IconButton size="small">
      <IconSearch />
    </IconButton>
  </InputAdornment>
</Box>
);
}

export default NoticesSearch;






// import { useState } from 'react';
// import { ReactComponent as IconSearch } from '../../../images/icons/search.svg';
// import {ReactComponent as IconCross} from '../../../images/icons/cross-small.svg'


// function NoticesSearch() {
//   const [query, setQuery] = useState('');

//   const handleQueryChange = event => {
//     setQuery(event.target.value);
//   };

//   const handleClearQuery = () => {
//     setQuery('');
//   };

//   return (
//     <div>
//       <input type="text"
//         placeholder="Search"
//         value={query}
//         onChange={handleQueryChange} />
//       {query && <IconCross onClick={handleClearQuery} />}
//       <IconSearch />
//     </div>
//   );
// }



// export default NoticesSearch;
