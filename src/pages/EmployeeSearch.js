import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class EmployeeSearch extends Component {
  state = {
    search: "",
    employeeList: [],
    results: [],
  };

  handleInputChange = (event) => {
    const filter = event.target.value;
    
    const filteredList = this.state.results.filter((employee) => {
      const combinedNames = employee.name.first.toLowerCase() + " " + employee.name.last.toLowerCase();
      if (combinedNames.indexOf(filter.toLowerCase()) !== -1) {
        return employee;
      }
    });
    this.setState({results: filteredList})
  };

  componentDidMount() {
    API.getEmployeeList()
      .then((res) => {this.setState({ results: res.data.results })
      
    })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <SearchForm handleInputChange={this.handleInputChange} />
        <br></br>
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default EmployeeSearch;
