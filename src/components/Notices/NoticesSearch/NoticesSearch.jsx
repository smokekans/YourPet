import { useState } from "react";
import {
  Box,
  Input,
  InputAdornment,
  IconButton
} from "@mui/material";
import { ReactComponent as IconSearch } from '../../../images/icons/search.svg';
import {ReactComponent as IconCross} from '../../../images/icons/cross-small.svg'


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
      sx={[{
        display: "flex",
        alignItems: "center",
        width: 608,
        height: 44,
        margin: "auto",
        //  border: "1px solid #ccc",
        boxShadow: 2,
        borderRadius: 20,
        paddingLeft: 1,
        paddingRight: 1
      }]}
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


