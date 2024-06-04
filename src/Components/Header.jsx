import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="mx-auto mt-3 flex w-3/4 items-center justify-between p-4 dark:text-white">
      <Link to="/" className="underline-container text-[32px] italic">
        Lokesh Kudipudi
      </Link>
      <div className="flex gap-6 text-[24px]">
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
