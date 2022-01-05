import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Home;
