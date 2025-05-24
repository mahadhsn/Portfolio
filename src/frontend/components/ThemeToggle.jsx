import React, { useState, useEffect } from 'react'

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light'); 
        }
    }, [darkMode]);

  return (
    <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 px-4 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
    >
        {darkMode ? 'moon' : 'sun'}
    </button>
  )
}

export default ThemeToggle
