import React, { useState } from "react";

function AdvanceExampleOpti() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products] = useState([
    { name: "Laptop", price: 100000 },
    { name: "Phone", price: 50000 },
    { name: "Tablet", price: 30000 },
    { name: "Monitor", price: 20000 }
  ]);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    debugger;
    const filteredProducts = products.filter(
      (
        product //breakpoint
      ) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredProducts);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Type to search"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      <ul className="search-results">
        {results.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvanceExampleOpti;
