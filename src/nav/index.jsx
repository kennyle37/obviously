import React from 'react';
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <div className="nav-container">
      <FontAwesomeIcon className="nav-icon" icon={faBell} fixedWidth />
      <div className="nav-item">Upgrade</div>
      <div className="nav-item">Sign Out</div>
      <style jsx>{`
        .nav-container {
          display: flex;
          justify-content: flex-end;
          font-family: var(--FontBold);
          color: var(--gray);
          font-size: 20px;
          margin: 40px;
        }
        .nav-item {
          margin-left: 30px;
        }
      `}</style>
    </div>
  )
}

export default Nav;
