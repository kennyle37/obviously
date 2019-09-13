import React from 'react';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import Nav from '../nav/index';
import Submit from '../reusable/submit';
import Upload from '../reusable/upload';
import Divider2 from '../reusable/divider2';
import Database from '../reusable/database';

const DataIndex = () => {
  return (
    <div className="data-container">
      <Nav />
      <div className="data-page">
        <div className="data-header">
          <p className="header">Add datasets</p>
          <p className="header">to your Obviously account.</p>
          <p className="subheader">Add dataset for making predictions. We don't and will never store your data.</p>
        </div>
        <div className="data-upload">
          <p className="subheader">Upload a file</p>
          <Upload name="Upload a CSV"/>
          <Divider2 />
        </div>

          <p className="subheader">Connect a database</p>
          <p className="data-subtitle">In order to ensure Obviously AI has aces to your database, please whitelist our IP address <span className="highlight">104.198.187.43</span> on your database firewall.</p>
          <div className="data-selection">
            <div className="data-grid">
              <Database icon={faDatabase} name="mySQL" />
              <Database icon={faDatabase} name="postGRES" />
            </div>
          </div>


        <div className="data-form">
        </div>
      </div>

      <style>{`
        .data-container {
          flex-grow: 100;
        }
        .data-page {
          margin: 40px;
        }
        .highlight {
          font-weight: 900;
          color: var(--highlight);
        }
        .data-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10px;
        }
        .data-selection {
          width: 550px;
        }
      `}</style>
    </div>
  )
}

export default DataIndex;