// src/app.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AppProvider, useAppContext } from './contexts/AppContext'; // Import AppProvider
import RoutesComponent from './components/RoutesComponent';
import React from 'react';

function AppContent() {
  const { pathname } = useLocation();
  const { loading, setLoading } = useAppContext(); // Access the global loading state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
  }, []);

  return <RoutesComponent loading={loading} />;
}

function App() {
  return (
    <AppProvider>
      {/* Ensure AppProvider is the highest level */}
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
