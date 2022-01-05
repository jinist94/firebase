import React, { createContext, useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

const UserStore = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = () => {
    setCurrentUser(null);
  };
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrentUser(uid);
        console.log(uid, "로그인됨");
      } else {
        console.log("로그인 안됨");
      }
    });
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
