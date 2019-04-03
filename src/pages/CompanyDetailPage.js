import React, { Component } from 'react';
import CompanyAPI  from '../api/CompanyAPI.js';
import CompanyDetail from '../components/CompanyDetail.js';



class HomePage extends Component {
  state = {
    company: []
  }

  componentDidMount(){
    CompanyAPI.fetchCompanyByID(this.props.match.params.ID)
      .then((apiResponseJSON) => {
        this.setState({
          company: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div class="row">
      <div class="col-sm-12 company_detail_page">
        <h1> {this.state.company.company_name} </h1><hr/>
        <p>Email: {this.state.company.email}</p>
        <p>Address Line 1: {this.state.company.address_line_1}</p>
        <p>Address Line 2: {this.state.company.address_line_2}</p>
        <p>Zipcode: {this.state.company.company_zip_code}</p>
        <p>City: {this.state.company.city}</p>
        <p>Country:{this.state.company.country}</p><hr/>
        <CompanyDetail companies={this.state.company} id={this.props.match.params.ID}/>
      </div>
      </div>
    );
  }
}

export default HomePage;