import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPrivate = () => {

    const { user } = useContext(UserContext);
    

  return (
    <div className="main-content">

        <Navbar />
        <Outlet />
        {!user && <Navigate to="/" />}
        <Footer />        
    </div>
  )
}

export default LayoutPrivate
