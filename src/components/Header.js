import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
          <nav class="navbar navbar-dark bg-primary">
            <a class="btn btn-primary" href="/" role="button">Home</a>            
            <a class="btn btn-light" href="https://github.com/felixnyamweya/ui" role="button">GitHub</a>
          </nav>
    );
  }
}

export default Header;
