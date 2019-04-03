import React, { Component } from 'react';
import TournamentGameAPI from '../api/TournamentGameAPI.js';
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class EditGameForTourneyPage extends Component {
  state = {
    redirect: false,
    game: []
  }

  componentDidMount(){
    TournamentGameAPI.fetchGameByGameID(this.props.match.params.gameID)
      .then((apiResponseJSON) => {
        this.setState({
          game: apiResponseJSON
        })
      }
    )
  }
  
  handleSubmit(event){
    event.preventDefault();
    const tourneyObject = {
      team_id: this.state.game.team_id,
      court: event.target.elements[0].value,
      time: event.target.elements[1].value,
    }
    TournamentGameAPI.editGameByID(tourneyObject, this.props.match.params.gameID)
      .then((response) => { 
        console.log(response)
        this.setState({ redirect: true }) 
      })
  }

  render() {
    console.log(this.state)
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to = {`/company/team/${this.state.game.team_id}/game_detail`} />
    }
    return (
      <div>
            <h2>Edit Game for {this.state.game.court}</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Court: <input name="facility_name" type="text" placeholder={this.state.game.court}/>
              <br/>
              Time: <input name="address_line_1" type="text" placeholder={this.state.game.time}/>
              <br/><br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
              <NavLink href= "/companies"> Back To Companies Page</NavLink>
              <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
            
      </div>
    );
  }
}

export default EditGameForTourneyPage; 