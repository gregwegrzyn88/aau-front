import React, { Component } from 'react';
import CompanyAPI from '../api/CompanyAPI';
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';

class NewCategory extends Component {
  state = {
    redirect: false
  }
  
  handleSubmit(event){
    event.preventDefault();
    const companyObject = {
      company_name: event.target.elements[0].value,
      email: event.target.elements[1].value,
      address_line_1: event.target.elements[2].value,
      address_line_2: event.target.elements[3].value,
      company_zip_code: event.target.elements[4].value,
      city: event.target.elements[5].value,
      country: event.target.elements[6].value,
    }
    CompanyAPI.addCompany(companyObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to = "/companies" />
    }
    
    return (
      <div>
            <h2>Enter Company</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Company Name:<br/>
              <input type="text"/>
              <br/>
              Company Email:<br/>
              <input type="text"/>
              <br/>
              Address Line 1:<br/>
              <input type="text"/>
              <br/>
              Address Line 2:<br/>
              <input type="text"/>
              <br/>
              Company Zip Code:<br/>
              <input type="text"/>
              <br/>
              Company City:<br/>
              <input type="text"/>
              <br/>
              Company Country:<br/>
              <input type="text" placeholder="USA"/>
              <br/><br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
            <NavLink href= "/companies"> Back To Companies Page</NavLink>
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}

export default NewCategory; 