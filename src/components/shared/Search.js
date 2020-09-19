import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends Component {
  render() {
    return (
      <div className="search_box">
        <div className="search_section">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon="search" />
        </div>
      </div>
    );
  }
}

export default Search;
