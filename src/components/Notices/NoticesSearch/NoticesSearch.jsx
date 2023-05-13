import React, { useEffect, useState } from "react";
import { Box, Input, InputAdornment, IconButton } from "@mui/material";
import { ReactComponent as IconSearch } from "../../../images/icons/search.svg";
import { ReactComponent as IconCross } from "../../../images/icons/cross.svg";
import { useDispatch } from "react-redux";
import { getNoticesByQwery } from "redux/notices/noticesOperation";
import { useParams } from "react-router-dom";

const NoticesSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getNoticesByQwery());
  }, [dispatch]);

const onSubmit = (event) => {
  event.preventDefault();

  const newQuery = event.target.elements.search.value;
  dispatch(getNoticesByQwery({ query: newQuery, category: categoryName }));
  onSearch(newQuery);
  setQuery(""); 
};

 const handleQueryChange = (event) => {
  const newQuery = event.target.value;
  setQuery(newQuery);

  if (!newQuery.trim()) {
    dispatch(getNoticesByQwery({ query: "", category: categoryName }));
  }
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
        name="search"
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