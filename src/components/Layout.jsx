import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex items-center min-h-screen">
      <nav className="w-1/4 -ml-8">
        <Navbar />
      </nav>

      <main className="w-1/2 ml-8 -translate-y-10">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
