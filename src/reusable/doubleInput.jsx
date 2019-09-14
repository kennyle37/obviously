import React, { Component } from 'react';

class doubleInput extends Component {
  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target);
  }

  render() {
    const { title1, title2, name1, name2, placeholder1, placeholder2 } = this.props;
    return (
      <div className="doubleInput-container">
        <div className="doubleInput-one">
          <p className="title">{title1}</p>
          <input className="input-content" name={name1} onChange={this.handleChange} placeholder={placeholder1} />
        </div>
        <div className="doubleInput-two">
          <p className="title">{title2}</p>
          <input className="input-content" name={name2} onChange={this.handleChange} placeholder={placeholder2} />
        </div>
        <style jsx>{`
          .doubleInput-container {
            display: flex;
            background-color: var(--white);
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
        `}</style>
      </div>
    )
  }
}


export default doubleInput