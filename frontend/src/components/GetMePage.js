import "../css/GetMe.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

const GetMe = () => {

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
    postData();
  };

  async function postData(url = 'http://localhost:8000/getme', data = {}) {

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
    <form className="getme-main" onSubmit={handleSignup}>
    <div>
      <div className="title-h1">
        <h1>Get Me Page</h1>
      </div>

      <div className="title-h3">
        <h3>Get All Your Details</h3>
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
        <button type="submit">Get Me</button>
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
          <Link to="/login">Sign In</Link>
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

export default GetMe;