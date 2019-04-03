import React, { Component } from 'react';
import ParentAPI from '../api/ParentAPI.js'
import { Link } from 'react-router-dom';
import {NavLink } from 'reactstrap';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ParentListPerPlayer extends Component {
  state = {
    parents: [],
  }

  componentDidMount() {
    ParentAPI.fetchParents()
      .then((parents) => this.setState({
        parents: parents
    }));
  }

  createParentsList() {
    const id = parseInt(this.props.id);
    const filteredTeams = this.state.parents.filter((f) =>f.player_id === id);
    return filteredTeams.map((parent, index ) => (
        <div key ={index}>
          <div><p>Parent Email: {parent.parent_email}</p>
          <p>Parent Address Line 1: {parent.parent_address_line_1}</p>
          <p>Parent Address Line 1: {parent.parent_address_line_2}</p>
          <p>Parent Zip-Code: {parent.parent_company_zip_code}</p>
          <p>Parent City: {parent.parent_city}</p>
          <p>Parent Country: {parent.parent_country}</p>
          <Link to= {`/company/team/${parent.id}/parent_detail/edit`}><button>Edit Parent For {this.props.player} </button></Link> 
          <Link to= {`/company/team/${parent.id}/parent_detail/delete`}><button>Delete Parent For {this.props.player} </button></Link> </div>
        </div>
      ));
    }
  
  




  render() {
    
    return (
      <div>
        <h2>Parents info for : {this.props.player}</h2><hr/>
        {this.createParentsList()}
        <Link to= {`/company/team/${this.props.id}/parent_detail/new`}><button>Create New Parent For {this.props.player}</button></Link>
        <NavLink href= "/companies"> Back To Companies Page</NavLink>
      </div>
    );
  }
}

export default ParentListPerPlayer;