import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";

const route = createBrowserRouter([
  {
    element: <Home/>,
    path: "/"
  }
])

export { route };