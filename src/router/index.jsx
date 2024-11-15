import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import UserProfile from "../pages/UserProfile";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement : <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/userProfile",
                element: <UserProfile />
            }
        ]
    }
    
    
])