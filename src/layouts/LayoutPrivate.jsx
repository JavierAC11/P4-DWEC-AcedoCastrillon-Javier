import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";

const LayoutPrivate = () => {

    const { user } = useContext(UserContext);
    

  return (
    <div>

        <Navbar />
        <Outlet />
        <footer className="bg-dark text-white py-4 mt-auto">Footer</footer>
        {!user && <Navigate to="/" />}
        
    </div>
  )
}

export default LayoutPrivate
