import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { loginUser } from '../redux/actions/loginActions';
import { getUser } from '../redux/actions/userActions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.user.user);

  const token = login?.token;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {

    if(token){

      navigate(`/user/${user?.id}`);
    }
  })

  const checkLogin = (e) => {

    e.preventDefault();

    fetch("http://localhost:3001/api/v1/user/login" , {
      
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({ email, password})
    })
    .then((response) => response.json())
    .then((access) => {
            
      const token = { token: access.body.token};
      dispatch(loginUser(token));

      fetch("http://localhost:3001/api/v1/user/profile", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token.token
          },
        })
          .then((response) => response.json())
          .then((data) => {

            const userInfos = {
              id: data.body.id,
              firstName: data.body.firstName,
              userName: data.body.userName,
            }
      
            dispatch(getUser(userInfos));
            navigate(`/user/${userInfos.id}`);
          })
          .catch((error) => alert("Failed to fetch user data"));
    })
    .catch((error) => alert("Email or Password is invalid"))
  }

  return (
    <>
      <Navbar />
        <main className="main bg-dark">
          <section className="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser} size='lg' />
            <h1>Sign In</h1>
            <form onSubmit={checkLogin}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={email} onChange={e => setEmail(e.target.value)} autoComplete="current-password"  />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button type="submit" className="sign-in-button">
                Sign In
              </button>
            </form>
          </section>
        </main>
      <Footer />
    </>
  )
}

export default Login