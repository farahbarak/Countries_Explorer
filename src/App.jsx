import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = "https://restcountries.com/v3.1/all";
        if (region !== "all") url = https://restcountries.com/v3.1/region/${region};
        if (search.length >= 2) url = https://restcountries.com/v3.1/name/${search};
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [search, region]);

  return (
    <div className="container">
      <h1>🌍 Countries Explorer</h1>

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

      {loading && <p>Loading countries...</p>}
      {error && (
        <div>
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      <div className="grid">
        {!loading && !error && countries.map((c, i) => (
          <div key={i} className="card">
            <img src={c.flags?.png} alt={c.name?.common} />
            <h3>{c.name?.common}</h3>
            <p>Region: {c.region}</p>
            <p>Population: {c.population?.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;