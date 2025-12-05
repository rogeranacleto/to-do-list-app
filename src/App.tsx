import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Notfound } from "./pages/Notfound";
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
  },
  {
    element: <Notfound/>,
    path: "*"
  }
])

export { route };