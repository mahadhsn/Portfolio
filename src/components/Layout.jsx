import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="md:fixed md:top-1/4 md:w-1/4 mt-20 md:mt-10 mb-10">
        <Navbar />
      </nav>

      {/* Content Section */}
      <div className="grow flex flex-col items-center justify-center md:mt-40 md:ml-8">
        <main className="flex-1 w-full flex items-center justify-center md:max-w-[45%] mobile:max-w-[75%] mx-auto">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;