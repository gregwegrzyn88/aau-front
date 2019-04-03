import React, { Component } from 'react';
import CoachAPI  from '../api/CoachAPI.js';




class CoachDetailByID extends Component {
  state = {
    coach: []
  }

  componentDidMount(){
    CoachAPI.fetchCoachByCoachID(this.props.match.params.coachID)
      .then((apiResponseJSON) => {
        this.setState({
          coach: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Coach Name: {this.state.coach.coach_name}</h1>
        <p>Coach Email: {this.state.coach.email}</p>
      </div>
    );
  }
}

export default CoachDetailByID;