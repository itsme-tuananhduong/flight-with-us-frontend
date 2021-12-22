import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  let currentTheme = localStorage.getItem('theme');

  if (!currentTheme) {
    currentTheme = 'light';
  }

  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
