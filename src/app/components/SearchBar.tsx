import React, { useState } from "react";
import InputText from "./Inputs/InputText";
import { MagnifyingGlass } from "./assets/Icons";
type IProps = {
  onChange: Function;
};

const SearchBar = ({ onChange }: IProps) => {
  return (
    <InputText
      placeholder="Search for a user"
      name="search"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value);
      }}
    >
      <MagnifyingGlass />
    </InputText>
  );
};

export default SearchBar;
