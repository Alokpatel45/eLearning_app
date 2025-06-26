import "./auth.css";
import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" required />
          <label htmlFor="email">Email</label>
          <input type="email" required />
          <label htmlFor="password">password</label>
          <input type="password" required />
          <button className="common-btn">Login</button>
        </form>
        <p>
          Have an account?<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
