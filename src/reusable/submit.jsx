import React from 'react';

const Submit = ({ handleClick, name }) => {
  return (
    <div className="submit" onClick={handleClick}>
      <div className="submit-name">{name}</div>
      <style jsx>{`
        .submit {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          height: 90px;
          background-color: var(--submit);
          margin-top: 40px;
          margin-bottom: 40px;
          cursor: pointer;
        }
        .submit-name {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          vertical-align: middle;
          line-height: 90px;  
          color: #fff;
          font-size: 18px;
          font-weight: 900;
        }
      `}</style>
    </div>
  )
}

export default Submit;
