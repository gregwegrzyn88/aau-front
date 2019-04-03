import React, { Component } from 'react';
import ParentAPI from '../api/ParentAPI.js';
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class EditGameForTourneyPage extends Component {
  state = {
    redirect: false,
    parent: []
  }

  componentDidMount(){
    ParentAPI.fetchParentByParentID(this.props.match.params.parentID)
      .then((apiResponseJSON) => {
        this.setState({
          parent: apiResponseJSON
        })
      }
    )
  }
  
  handleSubmit(event){
    event.preventDefault();
    const parentObject = {
      player_id: this.state.parent.player_id,
      parent_email: event.target.elements[0].value,
      parent_address_line_1: event.target.elements[1].value,
      parent_address_line_2: event.target.elements[2].value,
      parent_company_zip_code: event.target.elements[3].value,
      parent_city: event.target.elements[4].value,
      parent_country: event.target.elements[5].value,
    }
    ParentAPI.editParentByID(parentObject, this.props.match.params.parentID)
      .then((response) => { 
        console.log(response)
        this.setState({ redirect: true }) 
      })
  }

  render() {
    console.log(this.state)
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to = {`/company/team/${this.state.parent.player_id}/parent_detail`} />
    }
    return (
      <div>
            <h2>Edit Parent </h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Parent Email: <input type="text" placeholder={this.state.parent.parent_email}/>
              <br/>
              Parent Address Line 1: <input type="text" placeholder={this.state.parent.parent_address_line_1}/>
              <br/>
              Parent Address Line 2: <input type="text" placeholder={this.state.parent.parent_address_line_2}/>
              <br/>
              Parent Zip Code: <input type="text" placeholder={this.state.parent.parent_company_zip_code}/>
              <br/>
              Parent City: <input type="text" placeholder={this.state.parent.parent_city}/>
              <br/>
              Parent Country: <input type="text" placeholder={this.state.parent.parent_country}/>
              <br/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
            <NavLink href= "/companies"> Back To Companies Page</NavLink>
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
            
      </div>
    );
  }
}

export default EditGameForTourneyPage; 