import React from 'react';

function Balance(props) {
  return (
    <>
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {props.type}</h3>
                <p className="account-amount">{props.amount}</p>
                <p className="account-amount-description">{props.available}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    </>
  )
}

export default Balance