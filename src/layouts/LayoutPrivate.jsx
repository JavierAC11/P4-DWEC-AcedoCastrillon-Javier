import { Navigate } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LayoutPrivate = () => {

    const { user } = useContext(UserContext);
    

  return (
    <div>

        {!user && <Navigate to="/" />}
        
    </div>
  )
}

export default LayoutPrivate
