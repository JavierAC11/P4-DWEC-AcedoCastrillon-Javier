import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home";
import LayoutPublic from "../layouts/LayoutPublic";
import { Suspense } from "react";
import LayoutPrivate from "../layouts/LayoutPrivate";

const Models = lazy(() => import("../pages/Models"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const UserProfile = lazy(() => import("../pages/UserProfile"));
const NotFound = lazy(() => import("../pages/NotFound"));
const SignUp = lazy(() => import("../pages/SignUp"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LayoutPublic />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading error page...</div>}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading contact...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading login...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signUp",
        element: (
          <Suspense fallback={<div>Loading sign-up...</div>}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/models/:id",
        element: (
          <Suspense fallback={<div>Loading models...</div>}>
            <Models />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/userProfile",
    element: <LayoutPrivate />, // Layout para rutas privadas
    children: [
      {
        index: true, // Define esta ruta como la predeterminada
        element: (
          <Suspense fallback={<div>Loading profile...</div>}>
            <UserProfile />
          </Suspense>
        ),
      },
    ],
  },
]);
