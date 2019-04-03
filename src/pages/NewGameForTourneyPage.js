import React, { Component } from 'react';
import TournamentGameAPI from '../api/TournamentGameAPI.js'
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class CreateGameForTourneyPage extends Component {
  state = {
    redirect: false
  }
  createGamesList() {
    const id = parseInt(this.props.match.params.gameID);
    const filteredScheduledGames = this.state.games.filter((f) =>f.team_id === id);
  
    return filteredScheduledGames.map((game, index ) => (
        <div key ={index}>
          {game.court}
          {game.time}
          {game.practice_address_line_2}
          {game.team_id}
        </div>
      ));
    }

    onCreate (){
      this.setState({redirect: true});
    }
    onFailure(e) {
      console.error(e);
      alert("Unsuccesful Submit")
    }
    handleSubmit(event){
      event.preventDefault();
      const id = parseInt(this.props.match.params.gameID);
      const gameObject = {
        court: event.target.elements[0].value,
        time: event.target.elements[1].value,
        team_id: id,
      }
      TournamentGameAPI.addGameforTourney(gameObject, this.onCreate.bind(this), this.onFailure)
      .then((response) => { this.setState({ redirect: true }) })
    }
    

  redirect(){
    const id = this.props.match.params.gameID;
    const url = `/company/team/${id}/game_detail`
    if(this.state.redirect === true){
      return (<Redirect to ={url}></Redirect>)
    } 
  }

  render() {
    return (
      <div>
        {this.redirect()}
        <h2>Create Game</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Court: <input name="court" type="text"/>
              <br/>
              Time: <input name="time" type="text"/>
              <br/><br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
            <NavLink href= "/companies"> Back To Companies Page</NavLink>
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}
export default CreateGameForTourneyPage;