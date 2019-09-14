import React from 'react';

const SmallButton = ({ handleClick }) => {
  return (
    <div className="smallButton-container" onClick={handleClick}>
      <p className="smallButton">+</p>
      <style jsx>{`
        .smallButton-container {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          height: 110px;
          margin-bottom: 10px;
          text-align: center;
          margin-left: 20px;
          cursor: pointer;
        }
        .smallButton {
          width: 100px;
          font-size: 50px;
          font-weight: 900;
          margin: 0;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          vertical-align: middle;
          line-height: 90px;  
        }
      `}</style>
    </div>
  )
}

export default SmallButton;
