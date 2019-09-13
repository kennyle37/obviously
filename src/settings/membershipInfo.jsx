import React from 'react';
import SingleInput from '../reusable/singleInput'

const MembershipInfo = () => {
  return (
    <div className="membership-container">
      <p className="title">Membership</p>
      <p>Switch to another plan or cancel membership.</p>
      <p className="subtitle">Current Plan</p>
      <SingleInput title="Premium" content="Supports 10M rows of data + 5 free user seats" fontSize="14px" cost="799" padding="10px"/>
      <p className="subtitle">Other Plans</p>
      <SingleInput title="Basic" content="Supports 500k rows of data + 1 free user seat" fontSize="14px" cost="299" padding="10px" />
      <SingleInput title="Standard" content="Supports 5M rows of data + 3 free user seat" fontSize="14px" cost="499" padding="10px" />
      <p className="cancellation">To cancel your membership, please email us at <a href="mailto:info@obviously.ai">info@obviously.ai</a></p>
      <style jsx>{`
        .membership-container {
          border: 1.5px solid var(--card-border);
          border-radius: 8px;
          box-shadow: 5px 6px 2px -4px var(--side-nav);
          padding-left: 25px;
          padding-right: 25px;
          height: 100%;
          }
        .cancellation {
          font-size: 14px;
        }
      `}</style>
    </div>
  )
}

export default MembershipInfo