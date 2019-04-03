import React, { Component } from 'react';
import CoachAPI from '../api/CoachAPI.js'
import { Link } from 'react-router-dom';
import {NavLink} from 'reactstrap';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class CoachListPerTeam extends Component {
  state = {
    coaches: [],
  }

  componentDidMount() {
    CoachAPI.fetchCoaches()
      .then((coaches) => this.setState({
        coaches: coaches
    }));
  }

  createTeamList() {
    const id = parseInt(this.props.id);
    const filteredTeams = this.state.coaches.filter((f) =>f.team_id === id);
    return filteredTeams.map((coach, index ) => (
        <div key ={index} class="coaches">
          <p> <Link to= {`/company/team/${coach.id}/coach/coach_detail`}>{coach.coach_name}</Link>     
          <Link to= {`/company/team/${coach.id}/coach/edit`}><button>Edit coach For {coach.coach_name} </button></Link> 
          <Link to= {`/company/team/${coach.id}/coach/delete`}><button>Delete coach For {coach.coach_name} </button></Link> </p>
        </div>
      ));
    }
  
  




  render() {
    
    return (
      <div>
        <h3>Coaches for {this.props.team}</h3><br/>
        {this.createTeamList()}
        <Link to= {`/company/team/${this.props.id}/coach/new`}><button>Create New Coach For {this.props.team}</button></Link>
        <NavLink href= "/companies"> Back To Companies Page</NavLink>
      </div>
    );
  }
}

export default CoachListPerTeam;
