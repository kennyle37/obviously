import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Database = ({ icon, name }) => {
  return (
    <div className="database-container">
      <div className="database-graphics">
        <FontAwesomeIcon icon={icon} size="5x"/>
        <p className="database-name">{name}</p>
      </div>

      <style jsx>{`
        .database-container {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          height: 110px;
          margin-bottom: 20px;
          text-align: center;
          height: 200px;
        }
        .database-graphics {
          top: 50%;
          position: relative;
          vertical-align: middle;
          transform: translateY(-50%);
          text-align: center;
        }
        .database-name {
          margin-top: 10px;
        }
      `}</style>
    </div>
  )
}

export default Database;
