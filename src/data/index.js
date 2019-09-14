import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import Nav from '../nav/index';
import Submit from '../reusable/submit';
import Upload from '../reusable/upload';
import Divider2 from '../reusable/divider2';
import Database from '../reusable/database';
import DisplayInput from '../reusable/displayInput';

const background = require('../assets/images/group2.svg');

class DataIndex extends Component {
  state = {
    hasFile: false,
    name: '',
    dbName: 'MySQL',
  }

  handleUpload = files => {
    const name = files[0].name;
    const type = name.slice(name.length-4);
    if (type !== ".csv") {
      alert('Please insert a csv file!');
      this.setState({
        hasFile: false,
        name: ''
      })
      return;
    } else {
      const reader = new FileReader();
      this.setState({
        hasFile: true,
        name: name,
      }, () => {
        reader.onloadend = (e) => {
          console.log(reader.result)
        }
        reader.readAsText(files[0]);
      })
    }
  }

  handleClick = val => {
    this.setState({
      dbName: val
    })
  }

  render() {
    const { dbName } = this.state;

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
            <ReactFileReader handleFiles={this.handleUpload} fileTypes={'.csv'}>
              <Upload name="Upload a CSV"/>
            </ReactFileReader>
            <p className="file-upload">{this.state.name}</p>
            <Divider2 />
          </div>
          <p className="subheader">Connect a database</p>
          <p className="subtitle">In order to ensure Obviously AI has aces to your database, please whitelist our IP address <span className="highlight">104.198.187.43</span> on your database firewall.</p>
          <div className="data-selection">
            <div className="data-grid">
              <div onClick={() => this.handleClick('MySQL')}>
                <Database handleClick={this.handleClick} icon={faDatabase} name="MySQL" current={dbName} />
              </div>
              <div onClick={() => this.handleClick('PostgreSQL')}>
                <Database handleClick={this.handleClick} icon={faDatabase} name="PostgreSQL" current={dbName} />
              </div>
            </div>
          </div>
          <div className="data-form">
            <DisplayInput title={"Display Name"} content={"Obviously AI PostgreSQL database"} />
            <DisplayInput title={"Description"} content={"Data base for quarterly sales stats."} columnStart="2" columnEnd="4" />
            <DisplayInput title={"Host"} content={"AWS"}  columnStart="1" columnEnd="3" />
            <DisplayInput title={"Port"} content={"3000"} />
            <DisplayInput title={"Username"} content={"Monica Greenleaf"} />
            <DisplayInput title={"Password"} content={"*********"} />
            <DisplayInput title={"Database"} content={"Production Database"} />
          </div>
          <Submit name="Add this database" />
        </div>
  
        <style jsx>{`
          @media (min-width:961px)  { 
            .data-container {
              flex-grow: 100;
              background: url(${background});
              background-repeat: no-repeat;
              background-position: right top;
              background-size: 900px;
            }
            .data-page {
              margin: 10px;
              margin-top: 200px
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
            .data-form {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 10px;
            }
            .react-file-reader-button {
              width: 400px;
            }
            .file-upload {
              margin: 0;
            }
          }
          @media (min-width:1600px) { 
            .data-container {
              flex-grow: 100;
              background: url(${background});
              background-repeat: no-repeat;
              background-position: right top;
            }
            .data-page {
              margin: 40px;
              margin-top: 200px
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
            .data-form {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 10px;
            }
            .react-file-reader-button {
              width: 400px;
            }
            .file-upload {
              margin: 0;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default DataIndex;