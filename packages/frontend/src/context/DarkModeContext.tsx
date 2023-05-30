import React, { useState } from 'react';

type ContextType = {
  darkMode: 'light' | 'dark';
  toggleDarkMode: () => void;
};

export const DarkModeContext = React.createContext<ContextType>({
  darkMode: 'dark',
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [darkMode, setDarkMode] = useState<'light' | 'dark'>(
    (localStorage.getItem('ui.theme') as 'light' | 'dark') || 'dark'
  );

  const toggleDarkMode = (): void => {
    const val = darkMode === 'light' ? 'dark' : 'light';
    setDarkMode(val);
    localStorage.setItem('ui.theme', val);
  };

  console.log(darkMode);

  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};
