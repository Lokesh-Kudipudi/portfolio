import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const useDarkModeContext = () => useContext(DarkModeContext);

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
