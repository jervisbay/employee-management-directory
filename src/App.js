import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import EmployeeSearch from "./pages/EmployeeSearch"

function App() {
  return (
    <Router>
        <div>
            
            <div class="jumbotron">
            <h1 class="text-center">Employee Directory</h1>
            <h6 class="text-center">Please use the search form to narrow results</h6>
            </div>
            <br></br>
            <EmployeeSearch />
            <br></br>
            
            
        </div>
    </Router>
  );
}

export default App;
