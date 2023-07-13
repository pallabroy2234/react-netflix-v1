import {createContext, useContext, useEffect, useState} from "react";
// import PropTypes from "prop-types";

import {auth, db} from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  return <AuthContext.Provider value={{signUp, signIn, logIn, logOut, user}}>{children}</AuthContext.Provider>;
};

// AuthContextProvider.propTypes = {
//   children: PropTypes.any,
// };
export const UserAuth = () => {
  return useContext(AuthContext);
};
