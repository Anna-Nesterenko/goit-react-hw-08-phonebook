import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/authThunk';

// import { GlobalStyles } from './GlobalStyles';
// import { ToastContainer } from 'react-toastify';
// import { NotFoundPage } from 'pages';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          {/* <Route element={<PublicRoute redirect="/home" />}>
            <Route path="home" element={<HomePage />} />
          </Route>
          <Route element={<PublicRoute redirect="/home" />}>
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route element={<PublicRoute redirect="/home" />}>
            <Route path="login" element={<LoginPage />} />
          </Route> */}
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
      {/* )} */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
