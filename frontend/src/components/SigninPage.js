// CSS
import "../css/SigninPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

const SignIn = () => {

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
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

  async function postData(url = 'http://localhost:8000/signin', data = {}) {

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

        //  SAVES TOKEN TO LOCALSTORAGE
        const token = data.access;
        localStorage.setItem(data.email, token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

  return (
    <form className="signin-main" onSubmit={handleSignup}>
    <div>
      <div className="title-h1">
        <h1>Sign In Page</h1>
      </div>

      <div className="title-h3">
        <h3>Welcome Back</h3>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div className="action">
          <button type="submit">Sign In</button>
        </div>

        <br />
        <br />
    
        <div className="button">
          <span>Don't have an account</span>
          <span>
            <Link to="/">Sign Up</Link>
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
          <br />
        </div>
      </div>
      </form>
  );
};

export default SignIn;
