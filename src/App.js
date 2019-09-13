import React, { Component } from 'react';
import './index.css';
import Sidenav from './sidenav/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SettingIndex from './settings/index';
import DataIndex from './data/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Sidenav />
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
