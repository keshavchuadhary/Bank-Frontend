"use client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Redirect from "./pages/Redirect";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RegistrationSuccessful from "./pages/RegistrationSuccessful";

function App() {

  const routes = createBrowserRouter([
    {
    path: "/",
    element: <Redirect />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/successful",
    element: <RegistrationSuccessful />,
  }
])

return (
  <RouterProvider router={routes}></RouterProvider>

)

}

export default App