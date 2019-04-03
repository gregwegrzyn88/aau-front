import React, { Component } from 'react';
import TeamAPI from '../api/TeamAPI.js'
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class NewTeamForCompanyPage extends Component {
  state = {
    redirect: false
  }
  createPostList() {
    const id = parseInt(this.props.match.params.ID);
    const filteredTeams = this.state.teams.filter((f) =>f.company_id === id);
  
    return filteredTeams.map((team, index ) => (
        <div key ={index}>
          {team.team_name}
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
      const id = parseInt(this.props.match.params.ID);
      const teamObject = {
        team_name: event.target.team.value,
        company_id: id
      }
      TeamAPI.addTeamForCompany(teamObject, this.onCreate.bind(this), this.onFailure)
      .then((response) => { this.setState({ redirect: true }) })
    }
    

  redirect(){
    const id = this.props.match.params.ID;
    const url = `/company/${id}/detail/`
    if(this.state.redirect === true){
      return (<Redirect to ={url}></Redirect>)
    } 
  }

  render() {
    return (
      <div>
        {this.redirect()}
        <h2>Enter Team</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Team Name: <input name="team" type="text"/>
              <br/><br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
            <NavLink href= "/companies"> Back To Companies Page</NavLink>
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}
export default NewTeamForCompanyPage;