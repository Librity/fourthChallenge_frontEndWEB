import React, { Component } from 'react';

import facebookLogo from './assets/facebookLogo.svg';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div class="header">
        <img src={facebookLogo} />
      </div>
    );
  }
}

export default Header;
