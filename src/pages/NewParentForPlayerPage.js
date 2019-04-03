import React, { Component } from 'react';
import ParentAPI from '../api/ParentAPI.js'
import { Redirect } from 'react-router';
import {NavLink } from 'reactstrap';


class CreateNewPlayerForParentPage extends Component {
  state = {
    redirect: false
  }
  createGamesList() {
    const id = parseInt(this.props.match.params.parentID);
    const filteredParents = this.state.parents.filter((f) =>f.player_id === id);
  
    return filteredParents.map((parent, index ) => (
        <div key ={index}>
          {parent.parent_email}
          {parent.parent_address_line_1}
          {parent.parent_address_line_2}
          {parent.parent_company_zip_code}
          {parent.parent_city}
          {parent.parent_country}
          {parent.player_id}
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
      const id = parseInt(this.props.match.params.parentID);
      const gameObject = {
        parent_email: event.target.elements[0].value,
        parent_address_line_1: event.target.elements[1].value,
        parent_address_line_2: event.target.elements[2].value,
        parent_company_zip_code: event.target.elements[3].value,
        parent_city: event.target.elements[4].value,
        parent_country: event.target.elements[5].value,
        player_id: id,
      }
      ParentAPI.addParentforPlayer(gameObject, this.onCreate.bind(this), this.onFailure)
      .then((response) => { this.setState({ redirect: true }) })
    }
    

  redirect(){
    const id = this.props.match.params.parentID;
    const url = `/company/team/${id}/parent_detail`
    if(this.state.redirect === true){
      return (<Redirect to ={url}></Redirect>)
    } 
  }

  render() {
    return (
      <div>
        {this.redirect()}
        <h2>Add Parent</h2><hr/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              Parent Email: <input name="court" type="text"/>
              <br/>
              Parent Address Line 1: <input name="time" type="text"/>
              <br/>
              Parent Address Line 2: <input name="court" type="text"/>
              <br/>
              Parent Zip-Code: <input name="time" type="text"/>
              <br/>
              Parent City: <input name="court" type="text"/>
              <br/>
              Parent Country: <input name="time" type="text"/>
              <br/><hr/>
              <button type="submit" value="Submit">Submit</button>
            </form> 
            <NavLink href= "/companies"> Back To Companies Page</NavLink>
            <hr/><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
    );
  }
}
export default CreateNewPlayerForParentPage;