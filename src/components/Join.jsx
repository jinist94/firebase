import React, { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Join = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: userName,
      })
        .then(() => {
          console.log("userName업데이트완료");
        })
        .catch((error) => {
          console.log(error.message);
        });
      setErrorMsg("");
      console.log(user, "Join");
      history.push("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "userName") {
      setUserName(value);
    }
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/">Login</Link>
      <form onSubmit={onSubmit}>
        <input
          name="userName"
          type="userName"
          placeholder="userName"
          required
          value={userName}
          onChange={onChange}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" />
      </form>
      <p>{errorMsg}</p>
    </div>
  );
};

export default Join;
