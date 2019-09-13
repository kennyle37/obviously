import React, { Component } from 'react';

import Nav from '../nav/index';
import SingleInput from '../reusable/singleInput';
import DoubleInput from '../reusable/doubleInput';
import MembershipInfo from './membershipInfo';
import UserSeats from './userSeats';
import Submit from '../reusable/submit';

class SettingIndex extends Component {
  state = {
    name: '',
    company: '',
    email: '',
    currentPW: '',
    newPW: '',
    repeatNewPW: '',
    cardNum: null,
    exp: null,
    cvv: null,
    zip: null,
  }

  handleChange = (e) => {
    this.setState({
      [e.name]: e.value
    })
  }

  render() {
    return (
      <div className="setting-container">
        <Nav />
        <div className="setting-page">
          <div className="setting-header">
            <p className="header">All your</p>
            <p className="header">settings in one place.</p>
            <p className="subheader">Manage account details, billing, and users.</p>
          </div>
          <div className="setting-form">
            <SingleInput title={"Name"} name={"name"} onChange={this.handleChange} />
            <SingleInput title={"Company"} name={"company"} onChange={this.handleChange}/>
            <SingleInput title={"Email"}  name={"email"} onChange={this.handleChange} />
            <SingleInput title={"Current Password"} name={"currentPW"} password onChange={this.handleChange} />
            <SingleInput title={"New Password"} name={"newPW"} password onChange={this.handleChange} />
            <SingleInput title={"Repeat New Password"} name={"repeatNewPW"} password onChange={this.handleChange} />
            <SingleInput title={"Card Number"} name={"cardNum"} onChange={this.handleChange} />
            <SingleInput title={"Expiration"} name={"exp"} onChange={this.handleChange} />
            <DoubleInput title1={"CVV"} title2={"Zip"} content1={"240"} content2={"01002"}/>
            <MembershipInfo />
            <UserSeats />
          </div>
          <Submit name="Update All Settings" />
        </div>
        <style jsx>{`
          .setting-container {
            flex-grow: 100;
          }
          .setting-page {
            margin: 40px;
          }
          .setting-form {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
          }
        `}</style>
      </div>
    )
  }
}




export default SettingIndex;