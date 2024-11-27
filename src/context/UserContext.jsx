/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth, logOut, loginFirebase } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Crear el contexto
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("null");


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

  // Funciones para actualizar el usuario
  const login = async (userData) => {
    console.log(userData.email)

    try{
      console.log(userData.email, userData.password)
      
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
