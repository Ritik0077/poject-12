import React from "react";
import "../Countries/CountryItem.css";

const CountryItem = ({ item }) => {
  const borders = item.borders.toString();
  const languages = item.languages.map((lan) => lan.name).toString();
//   console.log(languages)
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h2>{item.name}</h2>
          <img src={item.flag} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Capital:</strong> {item.capital}
            </li>
            <li>
              <strong>Region:</strong> {item.region}
            </li>
            <li>
              <strong>Subregion:</strong> {item.subregion}
            </li>
            <li>
              <strong>Population:</strong> {item.population}
            </li>
            <li>
              <strong>Languages:</strong> {languages}
            </li>
            <li>
              <strong>Borders:</strong> {borders}
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <h1>hello</h1>
  );
};

export default CountryItem;
