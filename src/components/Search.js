import React from "react";
import styled from "styled-components";

const Search = ({ submitSearch, searchValue, setSearchValue }) => {
  const selectHandler = (e) => {
    const { value, name } = e.target;
    setSearchValue({ ...searchValue, [name]: value });
  };

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setSearchValue({ ...searchValue, [name]: value });
  };

  // const { target, value } = searchValue;

  return (
    <SearchBox>
      <SelectBox
        name="target"
        onChange={(e) => {
          selectHandler(e);
        }}
      >
        <SearchOptions value={0}>제목</SearchOptions>
        <SearchOptions value={1}>내용</SearchOptions>
        <SearchOptions value={2}>제목+내용</SearchOptions>
      </SelectBox>
      <SearchInput
        name="value"
        onChange={(e) => {
          inputHandler(e);
        }}
      />
      <SearchButton
        onClick={() => {
          submitSearch();
        }}
      >
        검색
      </SearchButton>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  margin-bottom: 0.5rem;
  @media screen and (max-width: 500px) {
    display: flex;
    height: 1.5rem;
  }
`;
const SearchInput = styled.input``;
const SearchButton = styled.button`
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;
const SelectBox = styled.select`
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;
const SearchOptions = styled.option``;
export default Search;
