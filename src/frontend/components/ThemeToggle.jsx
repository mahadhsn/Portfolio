import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

  return (
    <button
        onClick={toggleTheme}
        className="text-textlight dark:text-textdark"
    >
        {isDark ? 'moon' : 'sun'}
    </button>
  )
}

export default ThemeToggle;
