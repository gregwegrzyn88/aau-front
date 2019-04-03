import React, { Component } from 'react';
import PlayerAPI from '../api/PlayerAPI.js'
import { Link } from 'react-router-dom';
import {NavLink} from 'reactstrap';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class PlayerListPerTeam extends Component {
  state = {
    players: [],
  }

  componentDidMount() {
    PlayerAPI.fetchPlayers()
      .then((players) => this.setState({
        players: players
    }));
  }

  createPlayerList() {
    const id = parseInt(this.props.id);
    const filteredTeams = this.state.players.filter((f) =>f.team_id === id);
    return filteredTeams.map((player, index ) => (
        <div key ={index} class="players_list">
          <p><Link to= {`/company/team/${player.id}/parent_detail`}>{player.player_name}</Link>     
          <Link to= {`/company/team/${player.id}/player/edit`}><button>Edit player For {player.player_name} </button></Link> 
          <Link to= {`/company/team/${player.id}/player/delete`}><button>Delete player For {player.player_name} </button></Link> </p>
        </div>
      ));
    }
  
  




  render() {
    
    return (
      <div>
        <h3>Players for {this.props.team}</h3><br/>
        {this.createPlayerList()}
        <Link to= {`/company/team/${this.props.id}/player/new`}><button>Create New Player For {this.props.team}</button></Link>
        <NavLink href= "/companies"> Back To Companies Page</NavLink>
        
      </div>
    );
  }
}

export default PlayerListPerTeam;
