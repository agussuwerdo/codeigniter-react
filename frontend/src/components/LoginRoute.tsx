import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Ensure the correct path to your AuthContext

const LoginRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth(); // Access authentication state from AuthContext

  return children;
};

export default LoginRoute;
