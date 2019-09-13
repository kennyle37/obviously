import React from 'react';

const profile = require('../assets/images/profile.png');
const ribbon = require('../assets/images/ribbon.png');

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="profile-pic">
        <img src={profile} alt="profile" style={{ height: '60px' }}/>
      </div>
      <div className="profile-info">
        <div className="info">Monica Greenleaf</div>
        <div className="info">Microsoft Inc.</div>
      </div>
      <img src={ribbon} alt="ribbon"/>

      <style>{`
        .profile-container {
          display: flex;
          background-color: var(--card-border);
          height: 85px;
          border-radius: 8px;
          margin-bottom: 40px;
        }
        .profile-pic {
          margin: 12px 20px 20px 20px;
        }
        .profile-info {
          margin-top: 12px;
          width: 100%;
        }
        .info {
          padding-top: 8px;
        }
      `}
      </style>
    </div>
  )
}

export default ProfileCard;
