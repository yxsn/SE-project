import React, { useState } from "react";
import "./signuppage.css";

const signuppage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [hovered, setHovered] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="container">
      <div className="header">
        <img src="/logo.png" alt="EcoRide Logo" className="logo" />
        <span className="logo-text">EcoRide</span>
      </div>

      <div className="card">
        <h2 className="title">
          {isLogin ? "Login to EcoRide" : "Sign Up for EcoRide"}
        </h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="input"
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
                className="input"
              />
            </div>
          )}
          <button
            type="submit"
            className={`button ${hovered ? "hover" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="alt-login">
          <p>or continue with</p>
          <button className="alt-button">🔒 Login with Google</button>
          <button className="alt-button">🍎 Login with Apple</button>
        </div>

        <p className="toggle-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={toggleForm} className="toggle-button">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default signuppage;
