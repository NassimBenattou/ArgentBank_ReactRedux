import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/loginActions';
import { getUser } from '../redux/actions/userActions';
import Navbar from '../components/Navbar';
import Balance from '../components/Balance';
import Footer from '../components/Footer';

function User() {

  const [firstname, setFirstname] = useState('');  
  const [lastname, setLastname] = useState('');  

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

      console.log(access.body)

      const data = access.body;

      setFirstname(data.firstName);
      setLastname(data.lastName);
      
      const userInfos = {
        firstName: data.firstName,
        lastName: data.lastName,
      }
      
      dispatch(getUser(userInfos));

    })

    console.log(token)

  }, [token, dispatch]);

  return (
    <>
      <Navbar />
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back<br />{firstname} {lastname} !</h1>
            <button className="edit-button">Edit Name</button>
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