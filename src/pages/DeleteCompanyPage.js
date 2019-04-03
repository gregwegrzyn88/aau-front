import React, { Component } from 'react';
import CompanyAPI from '../api/CompanyAPI';
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class DeleteCompanyPage extends Component {
  state = {
    redirect: false,
    company: []
  }
  
  handleSubmit(event){
    CompanyAPI.deleteCompanyByID(this.props.match.params.ID)
      .then((response) => { 
        console.log(response)
        this.setState({ redirect: true }) 
      })
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
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to = "/companies" />
    }
    return (
      <div class="row">
      <div class="col-sm-12 delete_company">
            <h2>Warning are you sure you want to delete {this.state.company.company_name}</h2><hr/>
            <button onClick={this.handleSubmit.bind(this)} type="submit" value="Submit">Submit</button>
            <NavLink href= "/companies"> Back To Companies Page</NavLink>
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
      </div>
    );
  }
}

export default DeleteCompanyPage; 