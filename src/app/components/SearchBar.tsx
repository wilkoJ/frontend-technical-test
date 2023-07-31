import React, { useState } from "react";
import InputText from "./Inputs/InputText";
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
      <svg
        className="h-5 w-5 fill-slate-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </svg>
    </InputText>
  );
};

export default SearchBar;
