import React, { useState } from "react";
import "./loginpage.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [hovered, setHovered] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="container">
      <div className="logobox">
        <img
          src="https://img.icons8.com/?size=100&id=9345&format=png&color=000000"
          alt="EcoRide Logo"
          className="signin-page-logo"
        />
        <span className="signin-page-logo-text">EcoRide</span>
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
            className={hovered ? "button hover" : "button"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
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

export default LoginSignup;
