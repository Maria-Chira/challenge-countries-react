import React, { useState } from "react";
import './App.css';
import CountryCard from './CountryCard';
import allCountries from './countriesAll.json';
import SearchBar from "./SearchBar";

function App() {
  const [countries, setCountries] = useState(allCountries);
  function filteredCountries(e) {
    const filteredCountries = allCountries.filter((country) => {
      return (
        country.name.toLowerCase().includes(e.target.value.toLowerCase())  ||
        country.capital.toLowerCase().includes(e.target.value.toLowerCase())  
      );
    })
    setCountries(filteredCountries);
  }
  
  return (
    <div className="App">
      <h1 className="MainHeading">Where in the world?</h1>
      <SearchBar filteredCountries={filteredCountries}/>
      <div className="AllCountriesContainer">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
