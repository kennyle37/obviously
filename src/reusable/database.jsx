import React, { Component } from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Database extends Component {
  render() {
    const { icon, name, current } = this.props;

    return (
      <div className={classNames({'database-container': true}, { 'activedb': current === name })}>
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
            cursor: pointer;
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
          .activedb {
            background-color: var(--highlight);
          }
        `}</style>
      </div>
    )
  }
}

export default Database;
