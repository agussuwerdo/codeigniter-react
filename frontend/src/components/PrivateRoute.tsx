// src/components/PrivateRoute
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Ensure the correct path to your AuthContext
import Loader from '../common/Loader';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loading } = useAuth(); // Access authentication state from AuthContext
  // Show a loading indicator while the authentication state is being loaded
  if (loading) {
    return <Loader />; // You can replace this with your own loading spinner
  }
  return isAuthenticated ? children : <Navigate to="/auth/signin" />;
};

export default PrivateRoute;
