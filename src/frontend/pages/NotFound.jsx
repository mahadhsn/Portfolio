import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Error";
  });
  return (
    <div className="mb-20 text-center py-20 text-xl font-bold">
      <h1 className="text-4xl mb-8 text-accentlight dark:text-accentdark">
        404 - Page Not Found
      </h1>
      <p className="mb-4">Sorry, the page you're looking for doesn't exist.</p>
      <p className="mb-12">
        Use the Navbar above to navigate through my website or...
      </p>
      <div>
        <a
          href="/"
          className="text-accentlight dark:text-accentdark underline font-bold"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
