/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth, logOut, loginFirebase } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user)

  useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }
  , [])

  const login = async (userData) => {

    try{
      console.log(userData)
      await loginFirebase({email: userData.email, password: userData.password})
      setUser(userData.email)
    }
    catch(error){
      console.log(error)
      setUser(null)
    } 
  };


  const logout = () => {
    setUser(null)
    logOut()
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
