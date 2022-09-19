import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';

export const PublicRoute = ({ children }) => {
  const isLogin = useSelector(isAuth);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  //   return <Outlet />;
  return children;
};

// export const PublicRoute = ({ children, restricted = false, to = '/' }) => {
//   const isLogin = useSelector(isAuth);
//   const shouldRedirect = isLogin && restricted;

//   return !shouldRedirect ? children : <Navigate to={to} replace />;
// };
