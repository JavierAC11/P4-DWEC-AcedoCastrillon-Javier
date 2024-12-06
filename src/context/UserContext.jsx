/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth, getDataById, logOut, loginFirebase } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

// Se crea el provider para el contexto de usuario
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Cuando el componente se monta, se ejecuta la función que guarda el usuario en el estado
  useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDataById(user.uid).then((data) => {
          console.log(data)
          setUser({id: user.uid, nombre: data.nombre, correo: data.correo, telefono: data.telefono})
        }
        )
      } else {
        setUser(null)
      }
    })
  }
  , [])

  // Aparte de guardar el usuario en el estado, se guarda en la base de datos
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
    <UserContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
