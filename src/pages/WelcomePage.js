import React, { Component } from 'react';
import {NavLink } from 'reactstrap';


class WelcomePage extends Component {
  
  render() {
    return (
      <div class="row">
        <div class="col-sm-12 welcome">
              <h2>Welcome To the AAU Scheduling APP</h2><hr/>
          <h2><NavLink href= "/companies"> View Companies </NavLink></h2><hr/>
          <h2> Brought to you By</h2><hr/>
          <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38281155_2015310425167377_2651344386255749120_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=e51bf4db7f099bde620c7fc968aac233&oe=5D421BB1" alt="Italian Trulli"></img>
      </div>
  </div>
    );
  }
}

export default WelcomePage; 

