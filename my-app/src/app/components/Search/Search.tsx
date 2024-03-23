import React, { useState } from "react";
import "./Search.scss";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (inputValue: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState<string>("505545563");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setInputValue(value);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={"505545563"}
      />
      <button
        className="search__button"
        onClick={() => onSearch(inputValue)}
      >{`->`}</button>
    </div>
  );
};

export default SearchInput;
