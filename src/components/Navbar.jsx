import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div>
                <NavLink to={"/"} className="nav-button">Home</NavLink>
                <NavLink to={"/contact"} className="nav-button">Contact</NavLink>
                <NavLink to={"/login"} className="nav-button">Login</NavLink>
            </div>
            

        </nav>
    );
    }

export default Navbar;