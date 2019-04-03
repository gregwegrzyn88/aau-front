import React, { Component } from 'react';
import PlayerAPI from '../api/PlayerAPI.js'
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class CreateNewPlayerForTeamPage extends Component {
  state = {
    redirect: false
  }
  createPostList() {
    const id = parseInt(this.props.match.params.teamID);
    const filteredPlayers = this.state.players.filter((f) =>f.team_id === id);
  
    return filteredPlayers.map((player, index ) => (
        <div key ={index}>
          {player.player_name}
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
      const id = parseInt(this.props.match.params.playerID);
      const playerObject = {
        player_name: event.target.player.value,
        date_of_birth: event.target.date_of_birth.value,
        team_id: id
      }
      PlayerAPI.addPlayerforTeam(playerObject, this.onCreate.bind(this), this.onFailure)
      .then((response) => { this.setState({ redirect: true }) })
    }
    

  redirect(){
    const id = this.props.match.params.playerID;
    const url = `/company/team/${id}/detail`
    if(this.state.redirect === true){
      return (<Redirect to ={url}></Redirect>)
    } 
  }

  render() {
    return (
      <div>
        {this.redirect()}
        <h2>Create Player</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Player Name: <input name="player" type="text"/>
              <br/>
              Date of Birth: <input name="date_of_birth" type="date" placeholder="0000-00-00"/>
              <br/><br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
            <NavLink href= "/companies"> Back To Companies Page</NavLink>
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}
export default CreateNewPlayerForTeamPage;
