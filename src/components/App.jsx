import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
// import { GlobalStyles } from './GlobalStyles';
// import { ToastContainer } from 'react-toastify';
// import { NotFoundPage } from 'pages';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <>
      {/* <Suspense fallback="Wait a little bit..."> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<div>LoginPage</div>} />
          <Route path="contacts" element={<ContactsPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
      {/* </Suspense> */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
