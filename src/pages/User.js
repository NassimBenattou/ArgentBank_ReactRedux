import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Update from '../components/Update';
import Balance from '../components/Balance';
import Footer from '../components/Footer';

function User() {

  const user = useSelector((state) => state.user.user);

  const[toggle, setToggle] = useState(false);    

  const toggleChange = () => {

    setToggle(!toggle);
  }

  return (
    <>
      <Navbar />
        <main className="main bg-dark">
          <div className="header">
              <h1>Welcome back<br />{user && user.firstName} {user && user.userName} !</h1>
              <button className="edit-button" onClick={toggleChange}>Edit Name</button>
              {toggle && 
              
                <Update />
              }   
          </div>  
          <Balance type="Checking (x8349)" amount="$2,082.79" available="Available Balance" />
          <Balance type="Savings (x6712)" amount="$10,928.42" available="Available Balance" />
          <Balance type="Credit Card (x8349)" amount="$184.30" available="Current Balance" />
        </main>
      <Footer />
    </>
  )
}

export default User