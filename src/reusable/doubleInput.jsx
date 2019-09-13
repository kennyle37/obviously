import React from 'react';

const doubleInput = ({ title1, title2 }) => {
  return (
    <div className="doubleInput-container">
      <div className="doubleInput-one">
        <p className="doubleInput-title">{title1}</p>
        <input className="doubleInput-info" />
      </div>
      <div className="doubleInput-two">
        <p className="doubleInput-title">{title2}</p>
        <input className="doubleInput-info" />
      </div>
      <style jsx>{`
        .doubleInput-container {
          display: flex;
        }
        .doubleInput-one {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          padding-left: 25px;
          height: 110px;
          margin-right: 10px;
          width: 50%;
        }
        .doubleInput-two {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          padding-left: 25px;
          height: 110px;
          width: 50%;
        }
        .doubleInput-title {
          font-weight: 900;
          font-size: 18px;
        }
        .doubleInput-info {
          font-size: 18px;
          padding-top: 10px;
        }
      `}</style>
    </div>
  )
}

export default doubleInput