import React from 'react';
import Desktop from './components/layout/Desktop';
import { OSProvider } from './context/OSContext';

function App() {
  return (
    <OSProvider>
      <Desktop />
    </OSProvider>
  );
}

export default App;
