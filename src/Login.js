import React from "react";
import "./Login.css";

const Login = () => {
  const register = () => {};
  const loginToApp = () => {};
  return (
    <div className="login">
      <img
        src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG30.png"
        alt=""
      />
      <form action="">
        <input placeholder="Full Name (required if registering)" type="text" />

        <input placeholder="Profile pic URL (optional)" type="text" />

        <input placeholder="Email" type="email" />

        <input placeholder="Password" type="password" />

        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;
