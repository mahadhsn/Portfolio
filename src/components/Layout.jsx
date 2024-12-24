import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="md:fixed md:top-1/4 md:w-1/4 mt-[25%] md:mt-5 mb-10">
        <Navbar />
      </nav>

      {/* Content Section */}
      <div className="flex-1 flex flex-col md:mt-[10%]">
        <main className="w-full flex-1 flex md:max-w-[40%] justify-items-center mobile:max-w-[75%] mx-auto">
          <Outlet />
        </main>
        
        {/* Footer */}
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;