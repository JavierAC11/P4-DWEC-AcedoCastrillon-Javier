/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth, getDataById, logOut, loginFirebase } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);



  useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDataById(user.uid).then((data) => {
          setUser({id: user.uid, nombre: data.nombre, correo: data.correo, telefono: data.telefono}),
          console.log(data)
        }
        )
      } else {
        setUser(null)
      }
    })
  }
  , [])

  const login = async (userData) => {

    try{
      loginFirebase(userData).then((u) => {
        getDataById(u.user.uid).then((data) => {
          setUser(data),
          console.log(data)
        }
        )
      }
      )
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
