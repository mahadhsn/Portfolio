import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex grid grid-cols-2 mt-40 bg-green-700">
      <nav className="w-1/4">
            <Navbar />
      </nav>

      <main className="w-10/11 bg-green-900">
          <Outlet />
      </main>
    </div>
  )
}

export default Layout
