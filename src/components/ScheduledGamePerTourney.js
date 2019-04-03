import React, { Component } from 'react';
import TournamentGameAPI from '../api/TournamentGameAPI.js'
import { Link } from 'react-router-dom';
import {NavLink } from 'reactstrap';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class GameListPerTourney extends Component {
  state = {
    games: [],
  }

  componentDidMount() {
    TournamentGameAPI.fetchGames()
      .then((games) => this.setState({
        games: games
    }));
  }

  createGamesList() {
    const id = parseInt(this.props.id);
    const filteredTeams = this.state.games.filter((f) =>f.team_id === id);
    return filteredTeams.map((game, index ) => (
        <div key ={index}>
          <p>Court : {game.court}<br/>
          Time : {game.time}<br/>
          <Link to= {`/company/team/${game.id}/game/edit`}><button>Edit {game.time} Game </button></Link> 
          <Link to= {`/company/team/${game.id}/game/delete`}><button>Delete {game.time} Game</button></Link> </p>
        </div>
      ));
    }
  
  




  render() {
    
    return (
      <div>
        <h1>Games for {this.props.tourney} Tournament</h1>
        {this.createGamesList()}
        <Link to= {`/company/team/${this.props.id}/game/new`}><button>Create New Game For {this.props.tourney} Tournament </button></Link>
        <NavLink href= "/companies"> Back To Companies Page</NavLink>
      </div>
    );
  }
}

export default GameListPerTourney;