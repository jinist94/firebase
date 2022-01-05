import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { firebaseInstance, authService } from "../service/firebase";
import { UserContext } from "../store/users";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { onLogin, onLogout, emailLogin } from "../service/authentication";
import { useState } from "react/cjs/react.development";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useContext(UserContext);

  const onGoogleLogin = (event) => {
    onLogin(event.target.name);
  };

  const clickLogout = () => {
    onLogout().then((result) => result && users.logout());
  };
  const onSubmit = (event) => {
    event.preventDefault();
    emailLogin(email, password);
    console.log(event.target.name);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <Link to="/">Go Home</Link>
      <Link to="/join">Go join</Link>

      <div>
        <form name="email" onSubmit={onSubmit}>
          <input type="email" name="email" onChange={onChange} />
          <input type="password" name="password" onChange={onChange} />
          <input type="submit" name="submit" />
        </form>
        <button name="google" onClick={onGoogleLogin}>
          Google Login
        </button>
        <button>Github Login</button>
        <button onClick={clickLogout}>로그아웃</button>
      </div>
    </div>
  );
};

export default Login;
