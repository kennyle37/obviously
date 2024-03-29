import React from 'react';
import classNames from 'classnames';
import { faTimes, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExistingUserCard = ({ title, content, privileged, remove }) => {
  return (
    <div className="existing-container">
      <div className="existing-info">
        <p className="title" style={{ 'marginBottom': '0px', 'marginTop': '25px', 'fontSize': '16px' }}>{title}</p>
        <p className="content">{content}</p>
      </div>
      <div className="existing-action">
        <div className="action-container">
          <div className={classNames({'icon': true}, { 'privileged': privileged })}>
            <FontAwesomeIcon icon={faUserShield} />
        </div>
          <p className="action-item">Admin</p>
        </div>
        <div className="action-container">
          <div className={classNames({'icon': true}, { 'remove': remove })}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <p className="action-item">Remove</p>
        </div>
      </div>
      <style jsx>{`
        .existing-container {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          height: 90px;
          
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
        }
        .existing-info {
          padding-left: 12px;
          padding-right: 12px;
        }
        .content {
          margin: 0;
          padding-top: 10px;
          font-size: 14px;
        }
        .existing-action {
          display: flex;
        }
        .action-container {
          margin: auto 0;
          text-align: center;
          padding: 0 10px;
        }
        .action-item {
          margin: 0;
          font-size: 12px;
        }
        .icon {
          display: inline-block;
          cursor: pointer;
        }
        .privileged {
          color: var(--highlight)
        }
        .remove {
          color: var(--error)
        }
      `}</style>
    </div>
  )
}

export default ExistingUserCard;
