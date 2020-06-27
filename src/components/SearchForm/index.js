import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          id="search-field"
          value={props.search}
          onChange={event => props.handleInputChange(event)}
          placeholder="search for name here"
        />

        
      </div>
    </form>
  );
}

export default SearchForm;
