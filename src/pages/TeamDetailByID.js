import React, { Component } from 'react';
import TeamAPI  from '../api/TeamAPI.js';
import CoachListPerTeam from '../components/CoachListPerTeam.js';
import PlayerListPerTeam from '../components/PlayerListPerTeam.js';
import ScheduledPracticePerTeam from '../components/ScheduledPracticePerTeam.js';
import ScheduledTournamentPerTeam from '../components/ScheduledTournamentPerTeam.js';



class TeamDetailByID extends Component {
  state = {
    team: []
  }

  componentDidMount(){
    TeamAPI.fetchTeamByTeamID(this.props.match.params.teamID)
      .then((apiResponseJSON) => {
        this.setState({
          team: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div class="row">
      <div class="col-sm-12 team_detail_by_id">
        <h1>Team: {this.state.team.team_name}</h1><hr/>
        <CoachListPerTeam team={this.state.team.team_name} id={this.props.match.params.teamID}/><hr/>
        <PlayerListPerTeam team={this.state.team.team_name} id={this.props.match.params.teamID}/><hr/>
        <ScheduledPracticePerTeam team={this.state.team.team_name} id={this.props.match.params.teamID}/><hr/>
        <ScheduledTournamentPerTeam team={this.state.team.team_name} id={this.props.match.params.teamID}/><hr/>
      </div>
      </div>
    );
  }
}

export default TeamDetailByID;