// CSS

import "../css/SignupPage.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const [userDetails, setUserDetails] = useState({
    email: "",
    about_me: "",
    password: "",
    password2: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // console.log(userDetails);

    postData()
  };

  async function postData(url = 'http://localhost:8000/signup', data = {}) {

      const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

  return (
    <form className="signup-main" onSubmit={handleSignup}>
      <div>
        <div className="title-h1">
          <h1>Sign up Page</h1>
        </div>

        <div className="title-h3">
          <h3>Create your new account</h3>
        </div>

        <div className="Form-group">
          <label htmlFor="email" className="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="Form-group">
          <label htmlFor="about_me">About Me</label>
          <input
            type="text"
            name="about_me"
            id="about_me"
            onChange={handleChange}
            required
          />
        </div>

        <div className="Form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="Form-group">
          <label className="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div className="action">
          <button type="submit">Sign Up</button>
        </div>

        <br />
        <br />

        <div className="button">
          <span>Already have an account</span>
          <span>
            <Link to="/login">Sign In/Login</Link>
          </span>

          <br />
          
          <span>Already have an account, get your details</span>
          <span>
            <Link to="/getMe">Account Details</Link>
          </span>

          <br />
          
          <span>Signout instead, here</span>
          <span>
            <Link to="/signout">Sign Out</Link>
          </span>

          <br />
        </div>

      </div>
    </form>
  );
};

export default Login;
