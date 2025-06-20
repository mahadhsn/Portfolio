import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
    { title: "Intro", path: "/logbook/intro", categories: ['life', 'career', 'school'], date: '2024-03-25', written_date: 'March 3rd, 2025' },
  ];

  return (
    <div className='text-textlight dark:text-textdark flex flex-col opacity-0 animate-fade-in mt-[5%] md:mt-[18%] w-full h-full mb-20'>

      <h1 className='text-3xl text-center items-center justify-center align-middle mb-2'>
        Get to know me :)
      </h1>

      <nav className='flex flex-row items-center justify-center space-x-4 text-lg font-semibold'>
        {['life', 'school', 'career'].map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-3 py-1 rounded transition-all duration-300 ease-in-out ${
              selectedCategories.includes(category)
                ? 'text-accentlight dark:text-accentdark'
                : 'hover:text-accenthoverlight dark:hover:text-accenthoverdark'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <hr className='mb-2 mt-2 border-textlight dark:border-textdark'></hr>

      <ul className="mt-6 space-y-2 list-disc list-inside">
        {logs
          .filter((log) =>
            selectedCategories.length === 0 ||
            log.categories.some((cat) => selectedCategories.includes(cat))
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

    </div>
  )
}

export default Logbook