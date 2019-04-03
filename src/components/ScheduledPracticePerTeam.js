import React, { Component } from 'react';
import ScheduledPracticeAPI from '../api/ScheduledPracticeAPI.js'
import { Link } from 'react-router-dom';
import {NavLink } from 'reactstrap';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class SchedulePracticeListPerTeam extends Component {
  state = {
    scheduled_practices: [],
  }

  componentDidMount() {
    ScheduledPracticeAPI.fetchScheduledPractices()
      .then((scheduled_practices) => this.setState({
        scheduled_practices: scheduled_practices
    }));
  }

  createPlayerList() {
    const id = parseInt(this.props.id);
    const filteredTeams = this.state.scheduled_practices.filter((f) =>f.team_id === id);
    return filteredTeams.map((scheduled_practice, index ) => (
        <div key ={index}>
          <p>Practice Facility: {scheduled_practice.practice_facility_name}<br/>
          Practice Address Line 1: {scheduled_practice.practice_address_line_1}<br/>
          Practice Address Line 2: {scheduled_practice.practice_address_line_2}<br/>
          Practice Zipcode: {scheduled_practice.practice_zip_code}<br/>
          Practice City: {scheduled_practice.practice_city}<br/>
          Practice Country: {scheduled_practice.practice_country}<br/>
          Practice Day: {scheduled_practice.practice_day}<br/>
          Practice Time: {scheduled_practice.practice_time}<br/>
          <Link to= {`/company/team/${scheduled_practice.id}/scheduled_practice/edit`}><button>Edit Practice For {scheduled_practice.practice_day} </button></Link> 
          <Link to= {`/company/team/${scheduled_practice.id}/scheduled_practice/delete`}><button>Delete Practice For {scheduled_practice.practice_day}</button></Link> </p>
        </div>
      ));
    }
  
  




  render() {
    
    return (
      <div>
        <h3>Practices for {this.props.team}</h3>
        {this.createPlayerList()}
        <Link to= {`/company/team/${this.props.id}/scheduled_practice/new`}><button>Create New Scheduled Practice For {this.props.team}</button></Link>
        <NavLink href= "/companies"> Back To Companies Page</NavLink>
      </div>
    );
  }
}

export default SchedulePracticeListPerTeam;
