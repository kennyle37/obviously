import React, { Component } from 'react';

import Nav from '../nav/index';
import SingleInput from '../reusable/singleInput';
import DoubleInput from '../reusable/doubleInput';
import MembershipInfo from './membershipInfo';
import UserSeats from './userSeats';
import Submit from '../reusable/submit';

const background = require('../assets/images/group.svg');

class SettingIndex extends Component {
  state = {
    name: undefined,
    company: undefined,
    email: undefined,
    currentPW: undefined,
    newPW: undefined,
    repeatNewPW: undefined,
    cardNum: undefined,
    exp: undefined,
    cvv: undefined,
    zip: undefined,
  }

  handleChange = (e) => {
    this.setState({
      [e.name]: e.value
    })
  }

  handleClick = () => {
    console.log('User information updated!', JSON.stringify(this.state));
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
            <SingleInput title={"Name"} name={"name"} onChange={this.handleChange} placeholder="Monica Greenleaf"/>
            <SingleInput title={"Company"} name={"company"} onChange={this.handleChange} placeholder="Microsoft Inc." />
            <SingleInput title={"Email"}  name={"email"} onChange={this.handleChange}  placeholder="monica.greenleaf@microsoft.com" />
            <SingleInput title={"Current Password"} name={"currentPW"} password onChange={this.handleChange}  placeholder="**********" />
            <SingleInput title={"New Password"} name={"newPW"} password onChange={this.handleChange}  placeholder="**********" />
            <SingleInput title={"Repeat New Password"} name={"repeatNewPW"} password onChange={this.handleChange}  placeholder="**********" />
            <SingleInput title={"Card Number"} name={"cardNum"} onChange={this.handleChange}  placeholder="1234-5678-9012" />
            <SingleInput title={"Expiration"} name={"exp"} onChange={this.handleChange}  placeholder="01/99"/>
            <DoubleInput title1={"CVV"} name1={"cvv"} title2={"Zip"} name2={"zip"} onChange={this.handleChange}  placeholder1="000" placeholder2="55555"/>
            <MembershipInfo />
            <UserSeats handleChange={this.handleChange} />
          </div>
          <Submit name="Update All Settings" handleClick={this.handleClick}/>
        </div>
        <style jsx>{`
          .setting-container {
            flex-grow: 100;
            background: url(${background});
            background-repeat: no-repeat;
            background-position: right top;
          }
          .setting-page {
            margin: 40px;
          }
          .setting-form {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
          }
          .setting-header {
            margin-top: 200px;
          }
        `}</style>
      </div>
    )
  }
}




export default SettingIndex;