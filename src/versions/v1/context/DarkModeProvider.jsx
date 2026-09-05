import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const useDarkModeContext = () => useContext(DarkModeContext);

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`portfolio-v1${darkMode ? " dark" : ""}`}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
