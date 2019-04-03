import React, { Component } from 'react';
import CompanyAPI  from '../api/CompanyAPI.js';
import CompanyList from '../components/CompanyList.js';
import { Link } from 'react-router-dom';


class HomePage extends Component {
  state = {
    companies: []
  }

  componentDidMount(){
    CompanyAPI.fetchCompanies()
      .then((apiResponseJSON) => {
        this.setState({
          companies: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div class="row">
        <div class="col-sm-12 home">
          <h1> AAU Companies </h1><hr/>
          <h2>Click on a company below to view company details</h2>
          <CompanyList companies={this.state.companies} /> <hr/>
          <Link to = '/companies/new'> <button> Create New Company </button> </Link> <hr/>
          <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
        </div>
      </div>
    );
  }
}

export default HomePage;