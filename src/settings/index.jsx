import React from 'react';

import Nav from '../nav/index';
import SingleInput from '../reusable/singleInput';
import DoubleInput from '../reusable/doubleInput';
import MembershipInfo from './membershipInfo';
import UserSeats from './userSeats';
import Submit from '../reusable/submit';

const SettingIndex = () => {
  return (
    <div className="setting-container">
      <Nav />
      <div className="setting-header">
        <p className="header">All your</p>
        <p className="header">settings in one place.</p>
        <p className="subheader">Manage account details, billing, and users.</p>
      </div>
      <div className="setting-form">
        <SingleInput title={"Name"} content={"Monica Greenleaf"} />
        <SingleInput title={"Company"} content={"Microsoft inc"}  />
        <SingleInput title={"Email"} content={"monica.greenleaf@microsoft.com"} />
        <SingleInput title={"Current Password"} content={"***********"}/>
        <SingleInput title={"New Password"} content={"***********"}/>
        <SingleInput title={"Repeat New Password"} content={"***********"}/>
        <SingleInput title={"Card Number"} content={"1234-5678-9110-1111"}/>
        <SingleInput title={"Expiration"} content={"10/22"}/>
        <DoubleInput title1={"CVV"} title2={"Zip"} content1={"240"} content2={"01002"}/>
        <MembershipInfo />
        <UserSeats />
      </div>
      <Submit />
      <style jsx>{`
        .setting-container {
          flex-grow: 100;
        }
        .setting-header {
          margin: 40px;
        }
        .header {
          font-size: 48px;
          font-weight: 900;
          margin: 0;
        }
        .subheader {
          font-size: 18px;
          font-weight: 400;
        }
        .setting-form {
          margin: 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 10px;
        }
      `}</style>
    </div>
  )
}




export default SettingIndex;