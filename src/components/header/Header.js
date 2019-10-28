import React, { Component } from 'react';

import facebookLogo from './assets/facebookLogo.svg';
import profileLogo from './assets/profileLogo.svg';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="https://www.facebook.com/" target="_blank" className="logo">
          <img src={facebookLogo} className="facebookLogo" />
        </a>
        <div className="header-right">
          <a href="https://www.facebook.com/login/" target="_blank">My Profile</a>
          <a href="https://www.facebook.com/login/" target="_blank">
            <img src={profileLogo} />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
