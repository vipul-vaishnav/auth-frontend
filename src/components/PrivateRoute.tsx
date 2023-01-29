import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const [isLoggedIn, user, checking] = useAuth()

  if (checking) {
    return <>Loading...</>
  }

  return (
    isLoggedIn ? <Outlet context={{ user }} /> : <Navigate to="/login" />
  )
}

export default PrivateRoute