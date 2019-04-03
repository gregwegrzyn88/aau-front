import React, { Component } from 'react';
import TournamentScheduleAPI from '../api/TournamentScheduleAPI.js'
import { Link } from 'react-router-dom';
import {NavLink} from 'reactstrap';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class TournamentSchedulePerTeam extends Component {
  state = {
    tournament_schedules: [],
  }

  componentDidMount() {
    TournamentScheduleAPI.fetchScheduledTournaments()
      .then((tournament_schedules) => this.setState({
        tournament_schedules: tournament_schedules
    }));
  }

  createTournamentList() {
    const id = parseInt(this.props.id);
    const filteredTeams = this.state.tournament_schedules.filter((f) =>f.team_id === id);
    return filteredTeams.map((tournament_schedule, index ) => (
        <div key ={index}>
        <h5>Click On tournament below to view tournament details</h5>
          <p> <Link to= {`/company/team/${tournament_schedule.id}/game_detail`}>Tournament Facility: {tournament_schedule.tournament_facility_name}<br/></Link>
          Tournament Day: {tournament_schedule.tournament_day}<br/>
          Tournament Time: {tournament_schedule.tournament_time}<br/>
          <Link to= {`/company/team/${tournament_schedule.id}/tournament_schedule/edit`}><button>Edit Tournament For {tournament_schedule.tournament_facility_name} </button></Link> 
          <Link to= {`/company/team/${tournament_schedule.id}/tournament_schedule/delete`}><button>Delete Tournament For {tournament_schedule.tournament_facility_name}</button></Link> </p>
        </div>
      ));
    }
  
  




  render() {
    
    return (
      <div>
        <h4>Tournaments for {this.props.team}</h4>
        {this.createTournamentList()}
        <Link to= {`/company/team/${this.props.id}/tournament_schedule/new`}><button>Create New Tournament For {this.props.team}</button></Link>
        <NavLink href= "/companies"> Back To Companies Page</NavLink>
      </div>
    );
  }
}

export default TournamentSchedulePerTeam;
