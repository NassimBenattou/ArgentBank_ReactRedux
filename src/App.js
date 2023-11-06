import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {

  const login = useSelector((state) => state.login.token);

  const token = login?.token;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id" element={
              token ? (
                <>
                  <User />
            
                </>
              ) : (
                <Home />
              )
            } />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
