import React from 'react';

const doubleInput = ({ title1, title2, content1, content2 }) => {
  return (
    <div className="doubleInput-container">
      <div className="doubleInput-one">
        <p className="doubleInput-title">{title1}</p>
        <p className="doubleInput-info">{content1}</p>
      </div>
      <div className="doubleInput-two">
        <p className="doubleInput-title">{title2}</p>
        <p className="doubleInput-info">{content2}</p>
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
        }
      `}</style>
    </div>
  )
}

export default doubleInput