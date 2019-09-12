import React, { Component } from 'react';
import './index.css';
import Sidenav from './sidenav/index';
import SettingIndex from './settings/index';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidenav />
        <SettingIndex />
        <style jsx>{`
          .container {
            display: flex;
          }
        `}</style>
      </div>
    )
  }  
}

export default App
