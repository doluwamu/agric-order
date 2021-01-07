import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductSearch = () => {
  const history = useHistory();
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    category && history.push(`/${category}`);
    setCategory("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search_box">
      <div className="search_section">
        <div>
          <input
            onKeyPress={handleKeyPress}
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Search by category..."
          />
          <button onClick={handleSearch} style={{ marginRight: "2rem" }}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
