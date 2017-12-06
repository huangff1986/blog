import React, { Component } from 'react';
import logo from './img/logo.jpg';
import './style.less'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar__content">
        <header className="sidebar__header">
          <img src={logo} alt='manmu'/>
        </header>
        <div className="sidebar__intro">
          <p>漫木</p>
        </div>
        <div className="sidebar__nav">
        </div>
      </div>
    )
  }
}

export default Sidebar;