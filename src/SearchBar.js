import React from "react";

const SearchBar = (props) => {
    return (
        <input onChange={props.filteredCountries} type="text" placeholder="Search.." ></input>
    )
}

export default SearchBar;