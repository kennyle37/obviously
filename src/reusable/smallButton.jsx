import React from 'react';

const SmallButton = () => {
  return (
    <div className="smallButton-container">
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
        }
        .smallButton {
          width: 100px;
          font-size: 50px;
          font-weight: 900;
          margin: 0;
          margin-top: 22px; //TO FIX FOR RESPONSIVENESS
        }
      `}</style>
    </div>
  )
}

export default SmallButton;
