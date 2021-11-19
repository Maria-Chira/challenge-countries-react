import React from "react";

const CountryCard = (props) => {
    return (
      <div className="CardContainer">
        <img
          className="ImageFlag"
          src={props.country.flag}
          alt={`${props.country.name} country flag `}
        />
        <div className="CountryDetails">
          <h2>{props.country.name}</h2>
          <div>
            <p>
              <span>Population</span>: {props.country.population}
            </p>
            <p>
              <span>Region</span>: {props.country.region}
            </p>
            <p>
              <span>Capital</span>: {props.country.capital}
            </p>
          </div>
        </div>
      </div>
    );
}

export default CountryCard;