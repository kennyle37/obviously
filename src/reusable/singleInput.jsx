import React, { Component } from 'react';

class SingleInput extends Component {
  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target);
  }

  render() {
    let { title, fontSize, padding, columnStart, columnEnd, password, value, name, placeholder } = this.props;
    fontSize = fontSize === undefined ? '18px' : fontSize;
    padding = padding === undefined ? '15px' : padding;
    password = password === undefined ? 'input' : 'password';
  
    return (
      <div className="singleInput-container" style={{ 'padding': `0 ${padding}`, 'gridColumnStart': columnStart, 'gridColumnEnd': columnEnd}}>
        <p className="title">{title}</p>
        <input className="input-content" type={password} style={{ 'fontSize': `${fontSize}` }} name={name} value={value} onChange={this.handleChange} placeholder={placeholder} />
        <style jsx>{`
          @media (min-width:961px) { 
            .singleInput-container {
              border: 1.5px solid var(--card-border);
              border-radius: 8px;
              box-shadow: 5px 6px 3px -5px var(--white);
              height: 110px;
              margin-bottom: 10px;
              background-color: var(--white);
            }
            .input-content {
              margin: 0;
              padding-top: 10px;
              border-width:0px;
              border:none;
              font-size: 16px !important;
              width: 100%;
            }
          }

          @media (min-width:1025px) { 

          }
          @media (min-width:1281px) { 

          }
          @media (min-width:1600px) { 
            .singleInput-container {
              border: 1.5px solid var(--card-border);
              border-radius: 8px;
              box-shadow: 5px 6px 3px -5px var(--white);
              height: 110px;
              margin-bottom: 10px;
              background-color: var(--white);
            }
            .input-content {
              margin: 0;
              padding-top: 10px;
              border-width:0px;
              border:none;
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default SingleInput;
