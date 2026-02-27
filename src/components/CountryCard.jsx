
import React from "react";

function CountryCard({ country }) {
  const name = country.name?.common || "Unknown";
  const region = country.region || "N/A";
  const population = country.population
    country.population.toLocaleString() ||"N/A";

  return (
    <div className="card">
      <img src={flag} alt={name} />
      <h3>{name}</h3>
      <p>Region: {region}</p>
      <p>Population: {population}</p>
    </div>
  );
}

export default CountryCard;