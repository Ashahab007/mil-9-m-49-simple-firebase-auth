import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";

const LogIn = () => {
  const provider = new GoogleAuthProvider();

  // 1.0 To show the user data use useState first
  const [user, setUser] = useState(null);

  const handleOnClick = () => {
    console.log("clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        // 2.0 set the user data
        setUser(result.user);
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 4.0 add a logout button
  const auth = getAuth();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out");

        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Please Log In</h3>
      {/* 5.0 added logout button  */}
      {/* <button onClick={handleOnClick}>Sign in With Google</button>
      <button onClick={handleLogOut}>Log Out</button> */}
      {/* 5.0 or u can active the sign in and logout button conditionally */}
      {user ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <button onClick={handleOnClick}>Sign in With Google</button>
      )}
      <div>
        {/* 3.0  show the data in ui*/}
        <div>
          {/* or u can use below user.email method */}
          <div>{<h3>{user?.displayName}</h3>}</div>
          {/* or u can use upper user?.displayName method*/}
          {user && <p>{user.email}</p>}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
