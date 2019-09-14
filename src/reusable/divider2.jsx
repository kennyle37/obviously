import React from 'react';

const divider = () => {
  return (
    <div className="divider-container">
      <div className="divider-front"/>
      <p className="divider-break">OR</p>
      <div className="divider-back"/>
      <style jsx>{`
        .divider-container {
          display: flex;
        }
        .divider-front {
          width: 20%;
          height: 0;
          margin-top: 25px;
          border: solid .5px #E0E0E0;
        }
        .divider-back {
          width: 80%;
          height: 0;
          margin-top: 25px;
          border: solid .5px #E0E0E0;
        }
        .divider-break {
          margin-left: 30px;
          margin-right: 30px;
          color: var(--gray);
        }
      `}</style>
    </div>
  )
}

export default divider;
