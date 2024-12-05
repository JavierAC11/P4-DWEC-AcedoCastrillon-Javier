import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {

  const { user } = useContext(UserContext);

  console.log(user)

  return (
    <div>
      <h1>{user.nombre}</h1>
      <h3>{user.correo}</h3>
      <h3>{user.telefono}</h3>
    </div>
  )
}

export default UserProfile
