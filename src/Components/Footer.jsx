// import {useDarkModeContext} from "../"
import { useDarkModeContext } from "../context/DarkModeProvider";

function Footer() {
  const { darkMode, setDarkMode } = useDarkModeContext();

  const handleClickFooter = () => {
    document.querySelector("html").classList.toggle("dark");
    document.querySelector("body").classList.toggle("bg-black");
    setDarkMode((s) => !s);
  };

  return (
    <div className="absolute bottom-4 right-4 text-[10px] sm:text-xs">
      <button
        className="rounded-lg bg-black p-3 text-white dark:bg-white dark:text-black"
        onClick={handleClickFooter}
      >
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
    </div>
  );
}

export default Footer;
