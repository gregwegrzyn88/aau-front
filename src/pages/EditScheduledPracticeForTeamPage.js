import React, { Component } from 'react';
import ScheduledPracticeAPI from '../api/ScheduledPracticeAPI.js';
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class EditCoachForTeamPage extends Component {
  state = {
    redirect: false,
    scheduled_practice: []
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
    event.preventDefault();
    const coachObject = {
      team_id: this.state.scheduled_practice.team_id,
      practice_facility_name: event.target.elements[0].value,
      practice_address_line_1: event.target.elements[1].value,
      practice_address_line_2: event.target.elements[2].value,
      practice_zip_code: event.target.elements[3].value,
      practice_city: event.target.elements[4].value,
      practice_country: event.target.elements[5].value,
      practice_day: event.target.elements[6].value,
      practice_time: event.target.elements[7].value,
    }
    ScheduledPracticeAPI.editScheduledPracticeByID(coachObject, this.props.match.params.practiceID)
      .then((response) => { 
        console.log(response)
        this.setState({ redirect: true }) 
      })
  }

  render() {
    console.log(this.state)
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to = {`/company/team/${this.state.scheduled_practice.team_id}/detail`} />
    }
    return (
      <div>
            <h2>Edit Practice for {this.state.scheduled_practice.practice_day}</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Practice Facility: <input name="facility_name" type="text" placeholder={this.state.scheduled_practice.practice_facility_name}/>
              <br/>
              Practice Address Line 1: <input name="address_line_1" type="text" placeholder={this.state.scheduled_practice.practice_address_line_1}/>
              <br/>
              Practice Address Line 2: <input name="practice_address_line_2" type="text" placeholder={this.state.scheduled_practice.practice_address_line_2}/>
              <br/>
              Practice Zip Code: <input name="practice_zip_code" type="text" placeholder={this.state.scheduled_practice.practice_zip_code}/>
              <br/>
              Practice City: <input name="practice_city" type="text" placeholder={this.state.scheduled_practice.practice_city}/>
              <br/>
              Practice Country: <input name="practice_country" type="text" placeholder={this.state.scheduled_practice.practice_country}/>
              <br/>
              Practice Day: <input name="practice_day" type="text" placeholder={this.state.scheduled_practice.practice_day}/>
              <br/>
              Practice Time: <input name="practice_time" type="text" placeholder={this.state.scheduled_practice.practice_time}/>
              <br/><br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
            <NavLink href= "/companies"> Back To Companies Page</NavLink> 
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}

export default EditCoachForTeamPage; 