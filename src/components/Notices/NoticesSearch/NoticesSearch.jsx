import { useState } from "react";
import { Box, Input, InputAdornment, IconButton } from "@mui/material";
import { ReactComponent as IconSearch } from "../../../images/icons/search.svg";
import { ReactComponent as IconCross } from "../../../images/icons/cross.svg";

const NoticesSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClearQuery = () => {
    setQuery("");
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <Input
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
        disableUnderline
        sx={{
          width: "608px",
          height: "44px",
          boxShadow: 2,
          borderRadius: "20px",
          paddingLeft: "12px",
          paddingRight: "44px",
          position: "relative",
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
            <InputAdornment position="end" sx={{ position: "absolute", right: 0 }}>
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