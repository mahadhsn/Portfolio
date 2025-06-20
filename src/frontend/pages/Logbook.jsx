import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Logbook = () => {

  useEffect(() => {
    document.title = 'Mahad\'s Life'
  },[])

  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const logs = [
    { title: "Who's this guy anyway??", path: "/logbook/whos-this-guy-anyway", categories: ['life', 'career', 'school'], date: '2024-03-25', written_date: 'March 3rd, 2025' },
    { title: "About", path: "/logbook/whos-this-guy-anyway", categories: ['school', 'misc'], date: '2024-06-15', written_date: 'March 3rd, 2025' },

  ];

  return (
    <div className='text-textlight dark:text-textdark flex flex-col opacity-0 animate-fade-in mt-[5%] md:mt-[18%] w-full h-full'>

      <h1 className='text-3xl font-bold text-center items-center justify-center align-middle mb-2'>
        Get to know me :)
      </h1>
      <hr className='mb-5 border-textlight dark:border-textdark'></hr>

      <nav className='flex flex-row items-center justify-center space-x-4'>
        {['life', 'school', 'career'].map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-3 py-1 rounded transition-all ${
              selectedCategories.includes(category)
                ? 'bg-accentlight dark:bg-accentdark text-white'
                : 'hover:underline'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <ul className="mt-6 space-y-6">
        {logs
          .filter((log) =>
            selectedCategories.length === 0 ||
            log.categories.some((cat) => selectedCategories.includes(cat))
          )
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((log) => (
            <li key={log.title} className="flex flex-col">
              <h2 className="text-2xl font-semibold">{`${log.title} - ${log.written_date}`}</h2>
              <Link
                to={log.path}
                className="transition-all duration-300 ease-in-out hover:text-cyan-700"
              >
                <button>{log.title}</button>
              </Link>
            </li>
          ))}
      </ul>

    </div>
  )
}

export default Logbook