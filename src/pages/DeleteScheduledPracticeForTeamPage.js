import React, { Component } from 'react';
import ScheduledPracticeAPI from '../api/ScheduledPracticeAPI';
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';

class DeleteSchedulePractice extends Component {
  state = {
    redirect: false,
    scheduled_practice: [],
  }

  componentDidMount(){
    ScheduledPracticeAPI.fetchPracticeByPracticeID(this.props.match.params.practiceID)
      .then((apiResponseJSON) => {
        this.setState({
          scheduled_practice: apiResponseJSON
        })
      }
    )
  }
  
  handleSubmit(event){
    ScheduledPracticeAPI.deletePracticeByID(this.props.match.params.practiceID)
      .then((response) => { 
        console.log(response)
        this.setState({ redirect: true }) 
      })
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to = {`/company/team/${this.state.scheduled_practice.team_id}/detail`} />
    }
    return (
      <div>
            <h2>Warning are you sure you want to Delete {this.state.scheduled_practice.practice_day} </h2><hr/>
            <p>Coach Name : {this.state.scheduled_practice.practice_day}</p>
              <button onClick={this.handleSubmit.bind(this)} type="submit" value="Submit">Delete</button>
              <NavLink href= "/companies"> Back To Companies Page</NavLink>
              <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}

export default DeleteSchedulePractice; 