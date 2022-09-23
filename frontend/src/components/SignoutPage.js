import "../css/SignoutPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

const SignOut = () => {

  const [userDetails, setUserDetails] = useState({
    email: "",
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

  async function postData(url = 'http://localhost:8000/signout', data = {}) {

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

        // REMOVES TOKEN FROM LOCALSTORAGE ON SIGNOUT
        localStorage.removeItem(data.email)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

  return (
    <form className="signout-main" onSubmit={handleSignup}>
    <div>
      <div className="title-h1">
        <h1>Sign Out Page</h1>
      </div>

      <div className="title-h3">
        <h3>Bye !!!</h3>
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
      
      <br />

      <div className="action">
        <button type="submit">Sign Out</button>
      </div>

      <br />
      <br />

      <div className="button">
        <span>Don't have an account</span>
        <span>
          <Link to="/">Sign Up</Link>
        </span>

        <br />

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
        <br />
      </div>
      </div>
      </form>
);
};

export default SignOut;