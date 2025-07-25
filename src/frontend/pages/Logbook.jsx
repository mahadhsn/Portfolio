import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Logbook = () => {
  useEffect(() => {
    document.title = "Mahad's Life";
  }, []);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category],
    );
  };

  const logs = [
    {
      title: "Intro",
      path: "/logbook/intro",
      categories: ["life"],
      date: "2025-06-21",
      written_date: "June 21st, 2025",
    },
    {
      title: "How to land an internship 101",
      path: "/logbook/internship",
      categories: ["career"],
      date: "2025-07-07",
      written_date: "July 7th, 2025",
    },
    {
      title: "SceloCare: An App for Patients",
      path: "/logbook/sclerocare",
      categories: ["career"],
      date: "2025-07-24",
      written_date: "July 24th, 2025",
    },
  ];

  return (
    <div className="text-textlight dark:text-textdark flex flex-col opacity-0 animate-fade-in mt-[5%] md:mt-[18%] w-full h-full mb-20">
      <Helmet>
        <title>Mahad's Life</title>
        <meta
          name="description"
          content="Logbook page of Mahad Hassan's software engineering portfolio."
        />
      </Helmet>

      <h1 className="text-3xl text-center items-center justify-center align-middle mb-2">
        Get to know me :)
      </h1>

      <nav className="flex flex-row items-center justify-center space-x-4 text-lg font-semibold">
        {["life", "school", "career"].map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-3 py-1 rounded transition-all duration-300 ease-in-out ${
              selectedCategories.includes(category)
                ? "text-accentlight dark:text-accentdark"
                : "hover:text-accenthoverlight dark:hover:text-accenthoverdark"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <hr className="mb-2 mt-2 border-textlight dark:border-textdark"></hr>

      <ul className="mt-6 space-y-2 list-disc list-inside">
        {logs
          .filter(
            (log) =>
              selectedCategories.length === 0 ||
              selectedCategories.every((cat) => log.categories.includes(cat)),
          )
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((log) => (
            <li key={log.title} className="flex flex-row">
              <Link
                to={log.path}
                className="text-lg font-semibold mr-3 hover:text-accentlight dark:hover:text-accentdark transition-all duration-300 ease-in-out"
              >
                <button>{log.title}</button>
              </Link>
              <h2 className="mt-1">{log.written_date}</h2>
            </li>
          ))}
      </ul>

      <p className="mt-20 -mb-20 text-sm text-center px-4 text-gray-500">
        All opinions expressed here are my own and do not reflect the views of
        any affiliated organizations. All images used are my own unless
        otherwise stated.
      </p>
    </div>
  );
};

export default Logbook;
