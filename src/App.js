import React, { Component } from 'react';
import './index.css';
import Sidenav from './sidenav/index';
import SettingIndex from './settings/index';
import DataIndex from './data/index';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidenav />
        {/* <SettingIndex /> */}
        <DataIndex />
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
