// src/contexts/AuthContext
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean; // Add loading state to context
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // New loading state
  const navigate = useNavigate();

  // Load initial authentication state from localStorage
  useEffect(() => {
    const storedAuthState = localStorage.getItem('isAuthenticated');
    if (storedAuthState === 'true') {
      setIsAuthenticated(true); // Set as authenticated if stored as "true"
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  // Function to handle login
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Store in localStorage
    navigate('/'); // Redirect to dashboard after login
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove from localStorage
    navigate('/auth/signin'); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
