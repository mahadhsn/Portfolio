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
      categories: ["career", "school"],
      date: "2025-07-24",
      written_date: "July 24th, 2025",
    },
  ];

  const pics = [
    {
      title: "Belfountain",
      path: "/logbook/belfountain-30-6-25",
      date: "2025-06-30",
      written_date: "June 30th, 2025",
    },

    {
      title: "KillBear",
      path: "/logbook/killbear-3-8-25",
      date: "2025-08-03",
      written_date: "August 3rd, 2025",
    },

    {
      title: "Toronto",
      path: "/logbook/toronto-27-8-25",
      date: "2025-08-27",
      written_date: "August 27th, 2025",
    },

    {
      title: "Bronte Creek",
      path: "/logbook/bronte-31-8-25",
      date: "2025-08-31",
      written_date: "August 31st, 2025",
    },

    {
      title: "Stirling",
      path: "/logbook/stirling-11-10-25",
      date: "2025-10-11",
      written_date: "October 11th, 2025"
    }
  ];

  return (
    <div>
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

      <h1 className="text-2xl font-bold mt-4"> logs: </h1>

      <ul className="mt-2 mb-2 space-y-2 list-disc list-inside">
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
                className="text-lg mr-3 hover:text-accentlight dark:hover:text-accentdark transition-all duration-300 ease-in-out"
              >
                <button>{log.title}</button>
              </Link>
              <h2>{log.written_date}</h2>
            </li>
          ))}
      </ul>

      <hr className="mb-2 mt-2 border-textlight dark:border-textdark"></hr>

      <h1 className="text-2xl font-bold mt-4"> pics: </h1>

      <ul className="mt-2 space-y-2 list-disc list-inside">
        {pics
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((pic) => (
            <li key={pic.title} className="flex flex-row">
              <Link
                to={pic.path}
                className="text-lg mr-3 hover:text-accentlight dark:hover:text-accentdark transition-all duration-300 ease-in-out"
              >
                <button>{pic.title}</button>
              </Link>
              <h2>{pic.written_date}</h2>
            </li>
          ))}
      </ul>

      <p className="mt-20 text-sm text-center px-4 text-gray-500">
        All opinions expressed here are my own and do not reflect the views of
        any affiliated organizations. All images used are my own unless
        otherwise stated.
      </p>
    </div>
  );
};

export default Logbook;
