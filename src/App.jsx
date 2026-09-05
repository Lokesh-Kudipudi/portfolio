import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import VersionSwitcher from './components/VersionSwitcher';
import { readPreferredVersion } from './config/versions';

const V1 = lazy(() => import('./versions/v1/App'));
const V2 = lazy(() => import('./versions/v2/App'));

function PreferredVersionRedirect() {
  return <Navigate to={`/${readPreferredVersion()}`} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <VersionSwitcher />
      <Suspense fallback={<div className="version-loading" role="status">Loading portfolio…</div>}>
        <Routes>
          <Route path="/" element={<PreferredVersionRedirect />} />
          <Route path="/v1/*" element={<V1 />} />
          <Route path="/v2/*" element={<V2 />} />
          {/* Keep links to the original portfolio pages working. */}
          {['aboutme', 'projects', 'skills', 'contactme'].map((page) => (
            <Route key={page} path={`/${page}`} element={<Navigate to={`/v1/${page}`} replace />} />
          ))}
          <Route path="*" element={<Navigate to="/v1/not-found" replace />} />
        </Routes>
      </Suspense>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
