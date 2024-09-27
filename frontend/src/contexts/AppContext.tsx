// src/contexts/AppContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  notifications: string[];
  addNotification: (notification: string) => void;
  clearNotifications: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // Global state variables
  const [loading, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light'); // Example theme
  const [notifications, setNotifications] = useState<string[]>([]);

  // Notification handlers
  const addNotification = (notification: string) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        theme,
        setTheme,
        notifications,
        addNotification,
        clearNotifications,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
