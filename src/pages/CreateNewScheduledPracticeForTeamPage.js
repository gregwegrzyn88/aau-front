import React, { Component } from 'react';
import ScheduledPracticeAPI from '../api/ScheduledPracticeAPI.js'
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class CreateNewScheduledPracticeForTeamPage extends Component {
  state = {
    redirect: false
  }
  createPostList() {
    const id = parseInt(this.props.match.params.teamID);
    const filteredScheduledPractices = this.state.scheduled_practices.filter((f) =>f.team_id === id);
  
    return filteredScheduledPractices.map((scheduled_practice, index ) => (
        <div key ={index}>
          {scheduled_practice.practice_facility_name}
          {scheduled_practice.practice_address_line_1}
          {scheduled_practice.practice_address_line_2}
          {scheduled_practice.practice_zip_codelue}
          {scheduled_practice.practice_city}
          {scheduled_practice.practice_country}
          {scheduled_practice.practice_country}
          {scheduled_practice.practice_day}
          {scheduled_practice.team_id}
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
      const scheduledPracticeObject = {
        practice_facility_name: event.target.elements[0].value,
        practice_address_line_1: event.target.elements[1].value,
        practice_address_line_2: event.target.elements[2].value,
        practice_zip_code: event.target.elements[3].value,
        practice_city: event.target.elements[4].value,
        practice_country: event.target.elements[5].value,
        practice_day: event.target.elements[6].value,
        practice_time: event.target.elements[7].value,
        team_id: id,
      }
      ScheduledPracticeAPI.addScheduledPracticeforTeam(scheduledPracticeObject, this.onCreate.bind(this), this.onFailure)
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
        <h2>Create Practice</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Practice Facility: <input name="facility_name" type="text"/>
              <br/>
              Practice Address Line 1: <input name="address_line_1" type="text" placeholder="0000 N. StreetName Ave"/>
              <br/>
              Practice Address Line 2: <input name="practice_address_line_2" type="text" placeholder="Suite # 0"/>
              <br/>
              Practice Zip Code: <input name="practice_zip_code" type="text" placeholder="00000"/>
              <br/>
              Practice City: <input name="practice_city" type="text" placeholder="city"/>
              <br/>
              Practice Country: <input name="practice_country" type="text" placeholder="USA"/>
              <br/>
              Practice Day: <input name="practice_day" type="text" placeholder="Monday"/>
              <br/>
              Practice Time: <input name="practice_time" type="text" placeholder="0:00pm"/>
              <br/><br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
              <NavLink href= "/companies"> Back To Companies Page</NavLink>
              <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}
export default CreateNewScheduledPracticeForTeamPage;
