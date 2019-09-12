import React from 'react';
import '../index.css'

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
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Divider from './divider';
import ProfileCard from './profileCard';

const logo = require('../assets/images/logo.png');

const Sidenav = () => {
  return (
    <div className="sidenav-container">
      <div className="sidenav-card-header">
        <img src={logo} alt="obviously" style={{ height: '40px' }} />
        <FontAwesomeIcon className="sidenav-end-icon right" icon={faToggleOn} fixedWidth/>
      </div>
      <ProfileCard />
      <div className="sidenav-card">
        <FontAwesomeIcon className="sidenav-icon" icon={faBinoculars} fixedWidth />
        <span>
          Explore
        </span>
      </div>
      <div className="sidenav-card">
        <FontAwesomeIcon className="sidenav-icon" icon={faBook} fixedWidth />
        <span>
          Definitions       
        </span>
      </div>
      <div className="sidenav-card">
        <FontAwesomeIcon width="100" className="sidenav-icon" icon={faCog} fixedWidth />
        <span>
          Settings
        </span>
      </div>
      <div className="sidenav-card">
        <FontAwesomeIcon className="sidenav-icon" icon={faQuestion} fixedWidth />
        <span>
          Help
        </span>
      </div>
      <Divider />
      <div className="sidenav-card-header">
        <span>My Predictions</span>
        <FontAwesomeIcon className="sidenav-end-icon right" icon={faPlusCircle} fixedWidth />
      </div>
      <div className="sidenav-card">
        <FontAwesomeIcon className="sidenav-icon" icon={faCircle} fixedWidth />
        <span>
          MoM user churn for Q3
        </span>
      </div>
      <div className="sidenav-card">
        <FontAwesomeIcon className="sidenav-icon" icon={faCircle} fixedWidth />
        <span>
          Merch sales for Jan
        </span>
      </div>
      <div className="sidenav-card">
        <FontAwesomeIcon className="sidenav-icon" icon={faCircle} fixedWidth />
        <span>
          State-wise donor prediction
        </span>
      </div>
      <div>
        Show all
      </div>
      <Divider />
      <div className="sidenav-card-header">
        <span>
          My Datasets
        </span>
        <FontAwesomeIcon className="sidenav-end-icon right" icon={faPlusCircle} fixedWidth />
      </div>
      <div className="sidenav-card">
        <FontAwesomeIcon className="sidenav-icon" icon={faDatabase} fixedWidth />
        <span>
          Twitch data
        </span>
      </div>
      <div className="sidenav-card">
        <FontAwesomeIcon className="sidenav-icon" icon={faDatabase} fixedWidth />
        <span>
          SLOBS user data
        </span>
      </div>
      <div className="sidenav-card">
        <FontAwesomeIcon className="sidenav-icon" icon={faFileCsv} fixedWidth />
        <span>
          External CSV file
        </span>
      </div>
      <div>
        Show all
      </div>
      <style jsx>{`
      .sidenav-container {
        background-color: var(--side-nav);
        width: 400px;
        padding: 40px;
      }
      .sidenav-card {
        display: flex;
        margin-bottom: 20px;
      }
      .sidenav-icon {
        margin-right: 10px;
        width: 15px;
      }
      .sidenav-card-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      `}</style>
    </div>
  )
}

export default Sidenav
