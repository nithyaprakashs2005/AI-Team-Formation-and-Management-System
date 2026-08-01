import { Navigate, useLocation } from 'react-router-dom';
import { getSession } from '../../services/authSession';

export default function RequireAuth({ children }) {
  const location = useLocation();
  return getSession()
    ? children
    : <Navigate to="/login" replace state={{ from: location.pathname }} />;
}
