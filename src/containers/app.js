import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router'
import { 
} from 'antd';
import Sidebar from '../components/Sidebar'
import './App.less';


class App extends Component {
  render() {
    return (
      <div className="site-warp">
        <div className="site-container">
          <div className="site-content">
            <div className="sidebar">
              <Sidebar/>
            </div>
            <div className="main">
              sdf
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;