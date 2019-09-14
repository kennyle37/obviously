import React from 'react';

const profile = require('../assets/images/profile.png');
const ribbon = require('../assets/images/ribbon.png');

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="profile-pic-container">
        <img className="profile-pic" src={profile} alt="profile"/>
    </div>
      <div className="profile-info">
        <div className="info">Monica Greenleaf</div>
        <div className="info-description">Microsoft Inc.</div>
      </div>
      <img className="ribbon" src={ribbon} alt="ribbon"/>
      <style>{`
        @media (min-width:961px)  { 
          .profile-container {
            display: flex;
            background-color: var(--card-border);
            height: 85px;
            border-radius: 8px;
            margin-bottom: 40px;
          }
          .profile-pic-container {
            margin: 12px 20px 20px 20px;
          }
          .profile-pic {
            height: 60px;
          }
          .profile-info {
            margin: auto 0;
            width: 100%;
            font-size: 14px;
          }
          .info-description {
            font-family: var(--FontItalic);
            font-weight: 400;
          }
          .ribbon {
            height: 60px;
          }
        }
        @media (min-width:1600px) { 
          .profile-container {
            display: flex;
            background-color: var(--card-border);
            height: 85px;
            border-radius: 8px;
            margin-bottom: 40px;
          }
          .profile-pic-container {
            margin: 12px 20px 20px 20px;
          }
          .profile-pic {
            height: 60px;
          }
          .profile-info {
            margin: auto 0;
            width: 100%;
            font-size: 16px;
          }
          .info-description {
            font-family: var(--FontItalic);
            font-weight: 400;
          }
        }
      `}
      </style>
    </div>
  )
}

export default ProfileCard;
