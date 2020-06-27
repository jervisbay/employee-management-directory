import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div>
      <div class="row header-row">
      <div class="col" id="header-col">Image</div>
        <div class="col" id="header-col">Name</div>
        <div class="col" id="header-col">Phone</div>
        <div class="col" id="header-col">Email Address</div>
        <div class="col" id="header-col">Date of Birth</div>
      </div>

      {props.results.map((results) => (
        
        <div class="row text-center" id="result-row">
          <div class="col"><img src={results.picture.medium} /></div>
          <div class="col result-col">{results.name.first} {results.name.last}</div>
          <div class="col result-col">{results.cell}</div>
          <div class="col result-col">{results.email}</div>
          <div class="col result-col">{results.dob.date.substring(0,10)}</div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
