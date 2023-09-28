import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

export default function Login() {
  return (
    <>
      <Header />
      <div className="form-container">
        <form action="" className="form">
          <h1>Login</h1>
          <input type="text" placeholder="Username..." />
          <input type="password" placeholder="Password..." />
          <button>Login</button>
          <div className="auth-links">
            <Link to="recover">Forgot Password? /</Link>
            <Link to="/signup">Create account?</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
