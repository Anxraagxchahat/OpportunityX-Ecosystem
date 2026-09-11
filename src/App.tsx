import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { router } from './router';
import { MaintenancePage } from './pages/MaintenancePage';
import { MAINTENANCE_MODE } from './config/maintenance';

export const App: React.FC = () => {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
