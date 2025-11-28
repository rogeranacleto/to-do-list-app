import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

const route = createBrowserRouter([
  {
    element: <Home/>,
    path: "/"
  },
  {
    element: <Login/>,
    path: "/login"
  },
  {
    element: <Signup/>,
    path: "/signup"
  }
])

export { route };