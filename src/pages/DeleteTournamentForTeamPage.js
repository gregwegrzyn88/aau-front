import React, { Component } from 'react';
import TournamentScheduleAPI from '../api/TournamentScheduleAPI';
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';

class DeleteTournamentForTeamPage extends Component {
  state = {
    redirect: false,
    tournament: [],
  }

  componentDidMount(){
    TournamentScheduleAPI.fetchTournamentByTournamentID(this.props.match.params.tourneyID)
      .then((apiResponseJSON) => {
        this.setState({
          tournament: apiResponseJSON
        })
      }
    )
  }
  
  handleSubmit(event){
    TournamentScheduleAPI.deleteTournamentByID(this.props.match.params.tourneyID)
      .then((response) => { 
        console.log(response)
        this.setState({ redirect: true }) 
      })
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to = {`/company/team/${this.state.tournament.team_id}/detail`} />
    }
    return (
      <div>
            <h2>Warning are you sure you want to Delete {this.state.tournament.tournament_facility_name} </h2><hr/>
            <p>Tournamemt Facility : {this.state.tournament.tournament_facility_name}</p>
              <button onClick={this.handleSubmit.bind(this)} type="submit" value="Submit">Delete</button>
              <NavLink href= "/companies"> Back To Companies Page</NavLink>
              <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}

export default DeleteTournamentForTeamPage; 