import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';

export const PublicRoute = () => {
  const isLogin = useSelector(isAuth);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

// export const PublicRoute = ({ children, restricted = false, to = '/' }) => {
//   const isLogin = useSelector(isAuth);
//   const shouldRedirect = isLogin && restricted;

//   return !shouldRedirect ? children : <Navigate to={to} replace />;
// };
