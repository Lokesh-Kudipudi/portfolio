import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { rememberVersion } from '../config/versions';

export default function VersionSwitcher() {
  const { pathname } = useLocation();
  const version = /^\/(v1|v2)(?:\/|$)/.exec(pathname)?.[1];

  useEffect(() => {
    if (version) rememberVersion(version);
  }, [version]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className="version-bar">
      <span className="version-bar-label">Portfolio</span>
      <nav className="version-switcher" aria-label="Portfolio version">
        <NavLink to="/v1" title="V1 — Classic portfolio">V1 <span>Classic</span></NavLink>
        <NavLink to="/v2" title="V2 — Desktop portfolio">V2 <span>Desktop</span></NavLink>
      </nav>
    </header>
  );
}
