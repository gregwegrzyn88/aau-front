import React, { Component } from 'react';
import PlayerAPI from '../api/PlayerAPI.js';
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class EditPlayerForTeamPage extends Component {
  state = {
    redirect: false,
    player: []
  }

  componentDidMount(){
    PlayerAPI.fetchPlayerByPlayerID(this.props.match.params.playerID)
      .then((apiResponseJSON) => {
        this.setState({
          player: apiResponseJSON
        })
      }
    )
  }
  
  handleSubmit(event){
    event.preventDefault();
    const playerObject = {
      team_id: this.state.player.team_id,
      player_name: event.target.elements[0].value,
      date_of_birth: event.target.elements[1].value,
    }
    PlayerAPI.editPlayerByID(playerObject, this.props.match.params.playerID)
      .then((response) => { 
        console.log(response)
        this.setState({ redirect: true }) 
      })
  }

  render() {
    console.log(this.state)
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to = {`/company/team/${this.state.player.team_id}/detail`} />
    }
    return (
      <div>
            <h2>Edit Player for {this.state.player.player_name}</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Player Name: <input type="text" placeholder={this.state.player.player_name}/>
              <br/><br/>
              Player Date of Birth: <input type="date" placeholder={this.state.player.date_of_birth}/>
              <br/><br/>
              <button type="submit" value="Submit" >Submit</button>
            </form> 
            <NavLink href= "/companies"> Back To Companies Page </NavLink>
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
            
      </div>
    );
  }
}

export default EditPlayerForTeamPage; 