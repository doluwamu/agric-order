import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductSearch = () => {
  const history = useHistory();
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    category && history.push(`/${category}`);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="search_box">
      <div className="search_section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={category}
            onChange={handleChange}
            placeholder="Search by category..."
          />
          <button style={{ marginRight: "2rem" }}>Search</button>
        </form>
      </div>
    </div>
  );
};

export default ProductSearch;
