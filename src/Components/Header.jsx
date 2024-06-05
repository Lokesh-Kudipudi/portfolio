import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="absolute bottom-12 left-1/2 flex w-[90%] translate-x-[-50%] items-center justify-between rounded-lg border-4 border-dashed border-black p-4 text-sm sm:static sm:mx-auto sm:my-3 sm:max-w-[1200px] sm:translate-x-0 sm:border-0">
      <div className="underline-container">
        <Link to="/" className="mobile font-bold">
          Home
        </Link>
        <Link to="/" className="desktop italic sm:text-3xl md:text-4xl">
          Lokesh Kudipudi
        </Link>
      </div>
      <div className="flex gap-2 sm:text-lg md:gap-4 md:text-2xl">
        <Link className="underline-container" to="/projects">
          Projects
        </Link>
        <Link className="underline-container" to="/skills">
          Skills
        </Link>
        <Link className="underline-container" to="/contactme">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Header;
