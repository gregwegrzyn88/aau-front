import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class CompanyList extends Component {
  createCompanyNames = () => {
    const companyName = this.props.companies.map((company, index) => {
      return (
        <li class="company_list" key={index}><Link to={`/company/${company.id}/detail`}>{company.company_name}</Link> 
        <Link to={`/companies/${company.id}/delete`}><button>Delete Company</button></Link> <Link to={`/companies/${company.id}/edit`}><button>Edit Company</button></Link></li>
      );
    });
    return companyName
  }



  render() {
    
    return (
      <div>
        {this.createCompanyNames()}
      </div>
    );
  }
}

export default CompanyList;
