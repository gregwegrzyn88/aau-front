import React, { Component } from 'react';
import TournamentScheduleAPI  from '../api/TournamentScheduleAPI.js';
import ScheduledGamePerTourney from '../components/ScheduledGamePerTourney.js';





class TourneyDetailByID extends Component {
  state = {
    tourney: []
  }

  componentDidMount(){
    TournamentScheduleAPI.fetchTournamentByTournamentID(this.props.match.params.gameID)
      .then((apiResponseJSON) => {
        this.setState({
          tourney: apiResponseJSON
        })
      }
    )
  }
  



  render() {
    
  
    return (
      <div>
        <h1>Tourney Facility: {this.state.tourney.tournament_facility_name}</h1><hr/>
        <p>Tourney Address Line 1: {this.state.tourney.tournament_address_line_1}</p>
        <p>Tourney Address Line 2: {this.state.tourney.tournament_address_line_2}</p>
        <p>Tourney Zipcode: {this.state.tourney.tournament_zip_code}</p>
        <p>Tourney City: {this.state.tourney.tournament_city}</p>
        <p>Tourney Country: {this.state.tourney.tournament_country}</p>
        <p>Tourney Day: {this.state.tourney.tournament_day}</p>
        <p>Tourney Start-Time : {this.state.tourney.tournament_time}</p><hr/>
        <ScheduledGamePerTourney tourney={this.state.tourney.tournament_facility_name} id={this.props.match.params.gameID}/>
        <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}

export default TourneyDetailByID;