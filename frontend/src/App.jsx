import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"

const App = () => {
  const Layout = () => {
    return (
          <Outlet />
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home />},
        { path: "/contact", element: <Contact />},
        { path: "/about", element: <About />}
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App