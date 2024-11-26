import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Navbar = () => {

    const { user, logout } = useContext(UserContext);

    //const { user, setUser } = useContext(UserContext);

    return (
        <nav className="navbar navbar-dark bg-dark">
            {!user && <div>
                <NavLink to={"/"} className="nav-button">Home</NavLink>
                <NavLink to={"/contact"} className="nav-button">Contact</NavLink>
                <NavLink to={"/login"} className="nav-button">Login</NavLink>
                
            </div>
}
            {user && <div>
                <NavLink to={"/"} className="nav-button">Home</NavLink>
                <NavLink to={"/contact"} className="nav-button">Contact</NavLink>
                <NavLink to={"/userProfile"} className="nav-button">Profile</NavLink>
                <NavLink to={"/"} className="nav-button" onClick={() => {
                    logout();
                }}>Logout</NavLink>
            </div>
}            
        </nav>
    );
    }

export default Navbar;