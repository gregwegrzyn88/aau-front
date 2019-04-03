import React, { Component } from 'react';
import TournamentScheduleAPI from '../api/TournamentScheduleAPI.js';
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class EditCoachForTeamPage extends Component {
  state = {
    redirect: false,
    tounament: []
  }

  componentDidMount(){
    TournamentScheduleAPI.fetchTournamentByTournamentID(this.props.match.params.tourneyID)
      .then((apiResponseJSON) => {
        this.setState({
          tounament: apiResponseJSON
        })
      }
    )
  }
  
  handleSubmit(event){
    event.preventDefault();
    const tourneyObject = {
      tournament_facility_name: event.target.elements[0].value,
      tournament_address_line_1: event.target.elements[1].value,
      tournament_address_line_2: event.target.elements[2].value,
      tournament_zip_code: event.target.elements[3].value,
      tournament_city: event.target.elements[4].value,
      tournament_country: event.target.elements[5].value,
      tournament_day: event.target.elements[6].value,
      tournament_time: event.target.elements[7].value,
      team_id: this.state.tounament.team_id,
    }
    TournamentScheduleAPI.editTournamentByID(tourneyObject, this.props.match.params.tourneyID)
      .then((response) => { 
        console.log(response)
        this.setState({ redirect: true }) 
      })
  }

  render() {
    console.log(this.state)
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to = {`/company/team/${this.state.tounament.team_id}/detail`} />
    }
    return (
      <div>
            <h2>Edit Tournament for {this.state.tounament.tournament_facility_name}</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Tournament Facility: <input name="facility_name" type="text" placeholder={this.state.tounament.tournament_facility_name}/>
              <br/>
              Tournament Address Line 1: <input name="address_line_1" type="text" placeholder={this.state.tounament.tournament_address_line_1}/>
              <br/>
              Tournament Address Line 2: <input name="tournament_address_line_2" type="text" placeholder={this.state.tounament.tournament_address_line_2}/>
              <br/>
              Tournament Zip Code: <input name="tournament_zip_code" type="text" placeholder={this.state.tounament.tournament_zip_code}/>
              <br/>
              Tournament City: <input name="tournament_city" type="text" placeholder={this.state.tounament.tournament_city}/>
              <br/>
              Tournament Country: <input name="tournament_country" type="text" placeholder={this.state.tounament.tournament_country}/>
              <br/>
              Tournament Day: <input name="tournament_day" type="text" placeholder={this.state.tounament.tournament_day}/>
              <br/>
              Tournament Time: <input name="practice_time" type="text" placeholder={this.state.tounament.tournament_time}/>
              <br/><br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
              <NavLink href= "/companies"> Back To Companies Page</NavLink>
              <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
            
      </div>
    );
  }
}

export default EditCoachForTeamPage; 