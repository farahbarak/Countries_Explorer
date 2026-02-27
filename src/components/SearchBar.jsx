// src/components/SearchBar.jsx
import React from "react";

function SearchBar({ search, setSearch, region, setRegion }) {
  return (
    <div className="controls">
       <input
        type="text"
        placeholder="Search by country name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

       <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="all">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default SearchBar;