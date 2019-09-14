import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import SideNav from './sidenav/index';

import SettingIndex from './settings/index';
import DataIndex from './data/index';

class App extends Component {  
  render() {
    return (
      <Router>
        <div className="container">
          <SideNav />
          <Route path="/" exact component={SettingIndex} />
          <Route path="/settings/" component={SettingIndex} />
          <Route path="/database/" component={DataIndex} />
          <style jsx>{`
            .container {
              display: flex;
            }
          `}</style>
        </div>
      </Router>
    )
  }  
}

export default App
