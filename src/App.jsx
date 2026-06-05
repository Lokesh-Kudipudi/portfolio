import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Desktop from './components/layout/Desktop';
import { OSProvider } from './context/OSContext';

function App() {
  return (
    <OSProvider>
      <Desktop />
      <Analytics />
    </OSProvider>
  );
}

export default App;
