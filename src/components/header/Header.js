import React, { Component } from 'react';

import facebookLogo from './assets/facebookLogo.svg';
import profileLogo from './assets/profileLogo.svg';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div class="header">
        <img src={facebookLogo} class="facebookLogo" />
        <h4 class="profile">My Profile</h4>
        <img src={profileLogo} class="profileLogo" />
      </div>
    );
  }
}

export default Header;
