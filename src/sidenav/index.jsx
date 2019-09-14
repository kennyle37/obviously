import React, { Component } from 'react';
import '../index.css'
import classNames from 'classnames';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import { 
  faBinoculars, 
  faBook, 
  faCog, 
  faQuestion, 
  faCircle, 
  faDatabase, 
  faFileCsv, 
  faPlusCircle, 
  faToggleOn, 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Divider from '../reusable/divider';
import ProfileCard from './profileCard';

const logo = require('../assets/images/logo.png');

class SideNav extends Component {
  state = {
    route: 'settings'
  }

  handleClick = (value) => {
    this.setState({
      route: value
    })
  }

  render() {
    return (
      <div className="sidenav-container">
        <div className="sidenav-card-header">
          <img src={logo} alt="obviously" style={{ height: '40px' }} />
          <FontAwesomeIcon className="sidenav-end-icon right" icon={faToggleOn} fixedWidth/>
        </div>
        <ProfileCard />
        <div className="sidenav-card">
          <FontAwesomeIcon className="sidenav-icon" icon={faBinoculars} fixedWidth />
          <p className="link-name">
            Explore
          </p>
        </div>
        <Link to="/database/" style={{ textDecoration: 'none', 'color': 'var(--gray)' }} onClick={() => this.handleClick('database')}>
          <div className="sidenav-card">
            <FontAwesomeIcon className="sidenav-icon" icon={faBook} fixedWidth />
            <p className={classNames({'link-name': true}, { 'active': 'database' === this.state.route})}>
              Definitions
            </p>
          </div>
        </Link>
        <Link to="/settings/" style={{ textDecoration: 'none', 'color': 'var(--gray)' }} onClick={() => this.handleClick('settings')}>
          <div className="sidenav-card">
            <FontAwesomeIcon width="100" className="sidenav-icon" icon={faCog} fixedWidth />
            <p className={classNames({'link-name': true}, { 'active': 'settings' === this.state.route})}>
              Settings
            </p>
          </div>
        </Link>
        <div className="sidenav-card">
          <FontAwesomeIcon className="sidenav-icon" icon={faQuestion} fixedWidth />
          <p className="link-name">
            Help
          </p>
        </div>
        <Divider />
        <div className="sidenav-card-header">
          <p className="link-name">My Predictions</p>
          <FontAwesomeIcon className="sidenav-end-icon right" icon={faPlusCircle} fixedWidth />
        </div>
        <div className="sidenav-card">
          <FontAwesomeIcon className="sidenav-icon" icon={faCircle} fixedWidth />
          <p className="link-name">
            MoM user churn for Q3
          </p>
        </div>
        <div className="sidenav-card">
          <FontAwesomeIcon className="sidenav-icon" icon={faCircle} fixedWidth />
          <p className="link-name">
            Merch sales for Jan
          </p>
        </div>
        <div className="sidenav-card">
          <FontAwesomeIcon className="sidenav-icon" icon={faCircle} fixedWidth />
          <p className="link-name">
            State-wise donor prediction
          </p>
        </div>
        <div className="expand">
          Show all
        </div>
        <Divider />
        <div className="sidenav-card-header">
          <p className="link-name">
            My Datasets
          </p>
          <FontAwesomeIcon className="sidenav-end-icon right" icon={faPlusCircle} fixedWidth />
        </div>
        <div className="sidenav-card">
          <FontAwesomeIcon className="sidenav-icon" icon={faDatabase} fixedWidth />
          <p className="link-name">
            Twitch data
          </p>
        </div>
        <div className="sidenav-card">
          <FontAwesomeIcon className="sidenav-icon" icon={faDatabase} fixedWidth />
          <p className="link-name">
            SLOBS user data
          </p>
        </div>
        <div className="sidenav-card">
          <FontAwesomeIcon className="sidenav-icon" icon={faFileCsv} fixedWidth />
          <p className="link-name">
            External CSV file
          </p>
        </div>
        <div className="expand">
          Show all
        </div>
        <style jsx>{`
        .sidenav-container {
          background-color: var(--side-nav);
          width: 400px;
          padding: 40px;
          font-family: var(--FontLight);
          font-size: 18px;
          color: var(--gray);
          font-weight: 600;
        }
        .sidenav-card {
          display: flex;
          margin-bottom: 30px;
        }
        .sidenav-icon {
          margin-right: 10px;
          width: 15px;
        }
        .sidenav-card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .expand {
          font-size: 14px;
          margin-bottom: 30px;
        }
        .active {
          font-family: var(--FontBold);
        }
        .link-name {
          margin: 0;
        }
        `}</style>
      </div>
    )
  }
}

export default SideNav
