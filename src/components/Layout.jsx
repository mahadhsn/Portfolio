import Footer from "./Footer";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="mt-40 max-h-[80vh] max-w-6xl mx-auto">
      <div className="flex items-center">
        <nav className="w-1/4 -ml-8">
          <Navbar />
        </nav>

        <main className="w-1/2 ml-8">
          <Outlet />
        </main>
        
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  )
}

export default Layout
