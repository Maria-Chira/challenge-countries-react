
import './App.css';
import CountryCard from './CountryCard';
import allCountries from './countriesAll.json';

function App() {
  return (
    <div className="App">
      <h1 className="MainHeading">Where in the world?</h1>
      <div className="AllCountriesContainer">
        {allCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
