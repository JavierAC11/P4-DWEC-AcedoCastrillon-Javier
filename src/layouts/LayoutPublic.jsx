import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutPublic = () => {

    

  return (
    <div>
        <Navbar />
        <Outlet />
        <footer className="bg-dark text-white py-4 mt-auto">Footer</footer>
    </div>
  )
}

export default LayoutPublic
