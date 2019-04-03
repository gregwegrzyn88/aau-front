import React, { Component } from 'react';
import CoachAPI from '../api/CoachAPI.js'
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class CreateNewCoachForTeamPage extends Component {
  state = {
    redirect: false
  }
  createPostList() {
    const id = parseInt(this.props.match.params.teamID);
    const filteredCoaches = this.state.coaches.filter((f) =>f.team_id === id);
  
    return filteredCoaches.map((coach, index ) => (
        <div key ={index}>
          {coach.coach_name}
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
      const id = parseInt(this.props.match.params.teamID);
      const coachObject = {
        coach_name: event.target.coach.value,
        email: event.target.email.value,
        team_id: id
      }
      CoachAPI.addCoachforTeam(coachObject, this.onCreate.bind(this), this.onFailure)
      .then((response) => { this.setState({ redirect: true }) })
    }
    

  redirect(){
    const id = this.props.match.params.teamID;
    const url = `/company/team/${id}/detail`
    if(this.state.redirect === true){
      return (<Redirect to ={url}></Redirect>)
    } 
  }

  render() {
    return (
      <div>
        {this.redirect()}
        <h2>Create Coach</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Coach Name: <input name="coach" type="text"/>
              <br/><br/>
              Email: <input name="email" type="text"/>
              <br/><br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
            <NavLink href= "/companies"> Back To Companies Page</NavLink>
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}
export default CreateNewCoachForTeamPage;
