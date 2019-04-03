import React, { Component } from 'react';
import TeamAPI from '../api/TeamAPI.js'
import { Link } from 'react-router-dom';
import {NavLink } from 'reactstrap';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class CompanyDetail extends Component {
  state = {
    teams: [],
  }

  componentDidMount() {
    TeamAPI.fetchTeams()
      .then((teams) => this.setState({
        teams: teams
    }));
  }

  createTeamList() {
    const id = parseInt(this.props.id);
    const filteredTeams = this.state.teams.filter((f) =>f.company_id === id);
    return filteredTeams.map((team, index ) => (
        <div key ={index}>
          <p><Link to= {`/company/team/${team.id}/detail/`}>{team.team_name}</Link>     
          <Link to= {`/company/team/${team.id}/edit/`}><button>Edit Team For {team.team_name} </button></Link> 
          <Link to= {`/company/team/${team.id}/delete`}><button>Delete Team For {team.team_name} </button></Link> </p>
        </div>
      ));
    }
  
  




  render() {
    
    return (
      <div class="company_detail">
        <h1>Teams</h1><hr/>
        {this.createTeamList()}<hr/>
        <Link to= {`/company/${this.props.id}/team/new`}><button>Create New Team For {this.props.companies.company_name}</button></Link><hr/>
        <NavLink href= "/companies"> Back To Companies Page</NavLink>
      </div>
    );
  }
}

export default CompanyDetail;
