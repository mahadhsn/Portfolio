import Footer from "./footer/Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="md:fixed md:top-1/4 md:w-1/4 mt-[15%] md:mt-5 mb-[5%]">
        <Navbar />
      </nav>

      {/* Content Section */}
      <div className="flex-1 flex flex-col">
        <main className="w-full flex-1 flex md:max-w-[43%] justify-items-center mobile:max-w-[80%] mx-auto mb-10">
          <Outlet />
        </main>

        {/* Footer */}
        <div className="mt-2 pb-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
