import React, { Component } from 'react';
import SingleInput from '../reusable/singleInput'; 
import SmallButton from '../reusable/smallButton';
import ExistingUserCard from '../reusable/existingUserCard'

class UserSeats extends Component {
  state = {
    'name': '',
    'email': '',
  }

  handleClick = () => {
    console.log('User invited!', JSON.stringify(this.state));
  }

  handleChange = (e) => {
    this.setState({
      [e.name]: e.value
    })
  }

  render() {
    return (
      <div className="userSeats-container">
        <p className="title">User Seats</p>
        <p>Invite another user from your company to Obviously AI.</p>
        <div className="userSeats-invite-container">
          <div className="userSeats-invite">
            <SingleInput title="Name" name="name" onChange={this.handleChange} placeholder={"Dwayne 'The Rock' Johnson"}/>
            <SingleInput title="Email" name="email" onChange={this.handleChange} placeholder="mypetrock@wwf.com"/>
          </div>
          <SmallButton handleClick={this.handleClick} />
        </div>
  
        <p className="subtitle">Existing Users</p>
        <div className="userSeats-offset">
          <div className="userSeats-existingUsers-container ">
            <ExistingUserCard title="Monica Greenleaf" content="Monica.Greenleaf@microsoft.com" privileged/>
            <ExistingUserCard title="John Wick" content="John.wick@microsoft.com" privileged remove/>
            <ExistingUserCard title="Tom Cruise" content="Tom.Cruise@microsoft.com" remove/>
            <ExistingUserCard title="Emma Stone" content="emmastone@microsoft.com" remove/>
          </div>
        </div>
  
        <p>You have 1 of 5 free seats left. Your card will be charged $10 /mo for each additional users.</p>
        <style jsx>{`
          @media (min-width:961px)  { 
            .userSeats-container {
              grid-column-start: 2; 
              grid-column-end: 4; 
              border: 1.5px solid var(--card-border);
              border-radius: 8px;
              box-shadow: 5px 6px 2px -4px var(--side-nav);
              padding-left: 15px;
              padding-right: 15px;
              height: 100%;
              background-color: var(--white)
            }
            .userSeats-invite {
              display: grid;
              grid-auto-columns: 1fr;
              grid-auto-flow: column;
              grid-gap: 10px;
              width: 100%;
            }
            .userSeats-offset {
              display: flex;
            }
            .userSeats-invite-container {
              display: flex;
            }
            .userSeats-existingUsers-container {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              grid-gap: 10px;
              width: fit-content;
            }
          }
          @media (min-width:1025px) { 

          }
          @media (min-width:1281px) { 

          }
          @media (min-width:1435px) { 
            .userSeats-existingUsers-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 10px;
              width: fit-content;
            }
          }
          @media (min-width:1600px) { 
            .userSeats-container {
              grid-column-start: 2; 
              grid-column-end: 4; 
              border: 1.5px solid var(--card-border);
              border-radius: 8px;
              box-shadow: 5px 6px 2px -4px var(--side-nav);
              padding-left: 25px;
              padding-right: 25px;
              height: 100%;
              background-color: var(--white)
            }
            .userSeats-invite {
              display: grid;
              grid-auto-columns: 1fr;
              grid-auto-flow: column;
              grid-gap: 10px;
              width: 100%;
            }
            .userSeats-offset {
              display: flex;
            }
            .userSeats-invite-container {
              display: flex;
            }
            .userSeats-existingUsers-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 10px;
              width: fit-content;
            }
          }

        `}</style>
      </div>
    )
  }
}


export default UserSeats; 
