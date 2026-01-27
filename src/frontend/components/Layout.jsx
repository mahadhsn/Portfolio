import Footer from "./footer/Footer";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="md:fixed md:top-1/4 md:w-1/5 mt-[15%] md:mt-5 mb-[5%]">
        <Navbar />
      </nav>

      {/* Content Section */}
      <div className="flex flex-col">
        <main
          key={pathname}
          className="w-full flex md:max-w-[50%] mobile:max-w-[90%] mx-auto mb-10
            text-textlight dark:text-textdark text-lg
            mt-[5%] md:mt-[8%]
            animate-page-in"
        >
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
