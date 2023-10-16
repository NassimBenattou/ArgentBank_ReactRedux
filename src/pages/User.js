import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../redux/actions/userActions';
import Navbar from '../components/Navbar';
import Update from '../components/Update';
import Balance from '../components/Balance';
import Footer from '../components/Footer';

function User() {

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login.token);

  const token = login.token;

  useEffect(() => {

    fetch("http://localhost:3001/api/v1/user/profile", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
          },
    })
    .then((response) => response.json())
    .then((access) => {

      const data = access.body;

      const userInfos = {
        firstName: data.firstName,
        userName: data.userName
      }
      
      dispatch(getUser(userInfos));
    })
    
  }, [token, dispatch]);


  return (
    <>
      <Navbar />
        <main className="main bg-dark">  
          <Update/>
          <Balance type="Checking (x8349)" amount="$2,082.79" available="Available Balance" />
          <Balance type="Savings (x6712)" amount="$10,928.42" available="Available Balance" />
          <Balance type="Credit Card (x8349)" amount="$184.30" available="Current Balance" />
        </main>
      <Footer />
    </>
  )
}

export default User