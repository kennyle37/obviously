import React from 'react';

const SingleInput = ({ title, content, fontSize, cost, padding }) => {
  fontSize = fontSize === undefined ? '18px' : fontSize;
  padding = padding === undefined ? '25px' : padding;
  const hidden = cost === undefined ? 'none' : 'block';

  return (
    <div className="singleInput-container" style={{ 'padding': `0 ${padding}`}}>
      <p className="title">{title}</p>
      <div className="singleInput-info" style={{ 'font-size': `${fontSize}` }}>
        <p className="content">{content}</p>
        <p className="price" style={{ 'display': `${hidden}` }}>{`$${cost}/month`}</p>
      </div>
      <style jsx>{`
        .singleInput-container {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          height: 110px;
          margin-bottom: 10px;
        }
        .singleInput-info {
          display: flex;
          justify-content: space-between;
        }
        .content {
          margin: 0;
          padding-top: 10px;
        }
        .price {
          margin: 0;
          padding-top: 10px;
        }
      `}</style>
    </div>
  )
}

export default SingleInput;
