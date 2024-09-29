import React from "react";
import UserProfile from "./UserProfile";
//import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const LoginButton = () => {
  return (
    <a href="login">
      <button className="btn btn-outline btn-info">Login</button>
    </a>
  );
};

export default LoginButton;
