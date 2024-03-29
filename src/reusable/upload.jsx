import React from 'react';

const Upload = ({ name }) => {
  return (
    <div className="upload">
      <div className="upload-name">{name}</div>
      <style jsx>{`
        .upload {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          height: 90px;
          background-color: var(--submit);
          margin-bottom: 20px;
          width: 400px;
          cursor: pointer;
        }
        .upload-name {
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

export default Upload;
