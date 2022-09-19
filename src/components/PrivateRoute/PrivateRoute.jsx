import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';

export const PrivateRoute = () => {
  const isLogin = useSelector(isAuth);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
