import React, { Component } from 'react';
import PlayerAPI  from '../api/PlayerAPI.js';
import ParentListPerPlayer from '../components/ParentListPerPlayer.js';



class PlayerDetailByID extends Component {
  state = {
    player: []
  }

  componentDidMount(){
    PlayerAPI.fetchPlayerByPlayerID(this.props.match.params.parentID)
      .then((apiResponseJSON) => {
        this.setState({
          player: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Child Name: {this.state.player.player_name}</h1><hr/>
        <ParentListPerPlayer player={this.state.player.player_name} id={this.props.match.params.parentID}/>
        <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}

export default PlayerDetailByID;