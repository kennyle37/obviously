import React from 'react';

const SingleInput = ({ title, content }) => {
  return (
    <div className="singleInput-container">
      <p className="singleInput-title">{title}</p>
      <p className="singleInput-info">{content}</p>
      <style jsx>{`
        .singleInput-container {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          padding-left: 25px;
          height: 110px;
        }
        .singleInput-title {
          font-weight: 900;
          font-size: 18px;
        }
        .singleInput-info {
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}

export default SingleInput;
