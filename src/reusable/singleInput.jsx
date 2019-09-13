import React, { Component } from 'react';

class SingleInput extends Component {
  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target);
  }

  render() {
    let { title, fontSize, padding, columnStart, columnEnd, password, value, name } = this.props;
    fontSize = fontSize === undefined ? '18px' : fontSize;
    padding = padding === undefined ? '25px' : padding;
    password = password === undefined ? 'input' : 'password';
  
    return (
      <div className="singleInput-container" style={{ 'padding': `0 ${padding}`, 'grid-column-start': columnStart, 'grid-column-end': columnEnd}}>
        <p className="title">{title}</p>
        <div className="singleInput-info" style={{ 'font-size': `${fontSize}` }}>
          <input type={password} className="content" name={name} value={value} onChange={this.handleChange}></input>
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
        `}</style>
      </div>
    )
  }
}

export default SingleInput;
