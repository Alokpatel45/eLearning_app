import { Link } from "react-router-dom";
import "./auth.css";
import React from "react";

const Verify = () => {
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Verify Account</h2>
        <form action="">
          <label htmlFor="otp"></label>
          <input type="number" required />
          <button className="common-btn">Verify</button>
        </form>
        <p>
          Go to <Link to="/login">Login</Link> page.
        </p>
      </div>
    </div>
  );
};

export default Verify;
