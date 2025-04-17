import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ useAuth, children }) => {
  if (!useAuth) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
 
