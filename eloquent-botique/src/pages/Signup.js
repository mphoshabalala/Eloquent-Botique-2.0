import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <Header />
      <div className="form-container">
        <form action="" className="form">
          <h1>Register</h1>
          <input type="text" placeholder="Username..." />
          <input type="text" placeholder="Gmail..." />
          <input type="password" placeholder="Password..." />
          <input type="password" placeholder="Confirm password..." />
          <button>Create Account</button>
          <div className="auth-links">
            <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
