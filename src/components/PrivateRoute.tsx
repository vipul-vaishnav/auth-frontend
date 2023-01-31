import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loader from './Loader';

const PrivateRoute = () => {
  const [isLoggedIn, setIsLoggedIn, user, checking] = useAuth()

  if (checking) {
    return <Loader />
  }

  return (
    isLoggedIn ? <Outlet context={{ user, setIsLoggedIn }} /> : <Navigate to="/login" />
  )
}

export default PrivateRoute